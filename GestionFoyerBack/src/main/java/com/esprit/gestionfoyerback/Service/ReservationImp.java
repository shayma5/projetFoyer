package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.Entity.Etudiant;
import com.esprit.gestionfoyerback.Entity.Reservation;
import com.esprit.gestionfoyerback.Enum.TypeChambre;
import com.esprit.gestionfoyerback.Repository.BlocRepo;
import com.esprit.gestionfoyerback.Repository.ChambreRepo;
import com.esprit.gestionfoyerback.Repository.EtudiantRepo;
import com.esprit.gestionfoyerback.Repository.ReservationRepo;
import io.jsonwebtoken.lang.Assert;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ReservationImp implements ReservationService {
    private final ReservationRepo reservationRepositorie;
    private final EtudiantRepo etudiantRepository;
    private final ChambreRepo chambreRepository;
    private final BlocRepo blocRepo;

    @Override
    public Reservation addReservation(Reservation reservation) {
        return reservationRepositorie.save(reservation);
    }

    @Override
    public List<Reservation> findAllReservation() {
        return (List<Reservation>)reservationRepositorie.findAll();
    }

    @Override
    public Reservation findReservationById(String id) {
        return reservationRepositorie.findById(id).isPresent() ? reservationRepositorie.findById(id).get() : null;
    }

    @Override
    public String deleteReservationById(String id) {
        if(reservationRepositorie.findById(id).isPresent()){
            reservationRepositorie.deleteById(id);
            return "Deleted"+reservationRepositorie.findById(id).get().toString();
        }else
            return "etudiant with ID : "+id+" Doesn't exist";    }

    @Override
    public Reservation updateReservation(Reservation reservation) {
        return reservationRepositorie.save(reservation);
    }

    @Override
    @Transactional
    public Reservation ajouterReservation(long idChambre, long cinEtudiant) {
        Chambre chambre = chambreRepository.findById(idChambre).orElse(null);
        Etudiant etudiant = etudiantRepository.findByCin(cinEtudiant);

        Long numChambre = chambre.getNumeroChambre();
        Bloc bloc = chambre.getBlocs();
        float capacite = bloc.getCapaciteBloc();
        String nomBloc = bloc.getNomBloc();
        LocalDate today = LocalDate.now();
        Reservation rv = new Reservation();

        if (!capaciteMax(chambre)) {
            LocalDate annee = LocalDate.now();
            Reservation Res = new Reservation();
            String numReservation = numChambre + "-" + nomBloc + "-" + annee.getYear();
            Res.setIdReservation(numReservation);
            Res.setEstValide(true);
            Res.setAnneUniversitere(today);

            // Set the etudiants list of the Reservation entity
            Res.setEtudiants(Collections.singletonList(etudiant));

            bloc.setCapaciteBloc((long) (capacite + 1));
            reservationRepositorie.save(Res);

            etudiant.getReservations().add(Res);
            etudiantRepository.save(etudiant);

            int capacit = (getCapaciteMaximaleSelonType(chambre.getTypeC())) - 1;
            TypeChambre type = getTypeCSelonChambre(capacit);
            chambre.setTypeC(type);
            chambre.getReservations().add(Res);
            chambreRepository.save(chambre);
            blocRepo.save(bloc);
            rv = Res;

        } else {
            System.out.println("vous avez dépassé la capacité");
        }

        return rv;
    }

    int getCapaciteMaximaleSelonType(TypeChambre typeChambre) {
        switch (typeChambre) {
            case SIMPLE:
                return 1;
            case DOUBLE:
                return 2;
            case TRIPLE:
                return 3;
            default:
                throw new IllegalArgumentException("Type de chambre non pris en charge : " + typeChambre);
        }
    }
    TypeChambre getTypeCSelonChambre(int capacite) {
        switch (capacite) {
            case 0:
                return TypeChambre.SIMPLE;
            case 1:
                return TypeChambre.DOUBLE;
            case 2:
                return TypeChambre.TRIPLE;
            default:
                throw new IllegalArgumentException("Type de chambre non pris en charge : " + capacite);
        }
    }
    boolean capaciteMax(Chambre chambre){
        int nombreResParChambre = chambre.getReservations().size();
        System.out.println("le nombre par chambre est " + nombreResParChambre);

        int capaciteMax = getCapaciteMaximaleSelonType(chambre.getTypeC());
        System.out.println("la capacité par chambre est " + capaciteMax);

        boolean isCapacityExceeded = nombreResParChambre >= capaciteMax;
        System.out.println("La capacité est dépassée : " + isCapacityExceeded);

        return isCapacityExceeded;
    }

    @Override
    public List<Reservation>getReservationsForCurrentUser(long currentUserCin) {
        Etudiant currentUser = etudiantRepository.findByCin(currentUserCin);

        List<Reservation> allReservations = reservationRepositorie.findByEtudiants(currentUser);

        return allReservations;
    }

    @Override
    @Transactional
    public Reservation annulerReservation(Long cinEtudiant) {
        // Trouver l'étudiant et sa réservation
        Etudiant etudiant = etudiantRepository.findByCin(cinEtudiant);

        // Supposition: chaque étudiant a au maximum une réservation valide
        Reservation reservation = etudiant.getReservations().stream()
                .filter(Reservation::isEstValide)
                .findFirst()
                .orElse(null);

        // Mettre à jour l'état de la réservation
        reservation.setEstValide(false);

        // Désaffecter l'étudiant
        reservation.getEtudiants().remove(etudiant);

        // Désaffecter la chambre associée et mettre à jour sa capacité
        Chambre chambreAssociee = chambreRepository.findByReservationsContains(reservation);
        if (chambreAssociee != null) {
            chambreAssociee.getReservations().remove(reservation);
            chambreRepository.save(chambreAssociee); // Sauvegarder les changements dans la chambre
        }

        // Sauvegarder les modifications
        return reservationRepositorie.save(reservation);
    }
}
