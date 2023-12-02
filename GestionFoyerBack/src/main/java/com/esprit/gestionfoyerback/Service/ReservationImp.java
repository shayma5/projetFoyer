package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.Entity.Etudiant;
import com.esprit.gestionfoyerback.Entity.Reservation;
import com.esprit.gestionfoyerback.Enum.TypeChambre;
import com.esprit.gestionfoyerback.Repository.ChambreRepo;
import com.esprit.gestionfoyerback.Repository.EtudiantRepo;
import com.esprit.gestionfoyerback.Repository.ReservationRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ReservationImp implements ReservationService {
    private final ReservationRepo reservationRepo;
    private final EtudiantRepo etudiantRepo;
    private final ChambreRepo chambreRepo;

    @Override
    public List<Reservation> retrieveAllReservation() {
        return (List<Reservation>) reservationRepo.findAll();
    }

    @Override
    public Reservation updateReservation(Reservation res) {
        return reservationRepo.save(res);
    }

    @Override
    public Reservation retrieveReservation(long idReservation) {
        return reservationRepo.findById(idReservation).orElse(null);
    }

    @Override
    public Reservation ajouterReservation(Long idChambre, Long cin) {
        Chambre chambre = chambreRepo.findById(idChambre).orElse(null);
        Etudiant etudiant = etudiantRepo.findByCin(cin);

        if (chambre == null) {
            throw new IllegalArgumentException("Chambre introuvable.");
        }

        if (etudiant == null) {
            throw new IllegalArgumentException("Etudiant introuvable.");
        }

        Bloc blocs = chambre.getBlocs();
        if (blocs == null) {
            throw new IllegalArgumentException("Bloc introuvable pour la chambre.");
        }

        String idReservation = chambre.getNumeroChambre() + "-" + blocs.getNomBloc().replace(" ", "")
                + "-" + LocalDate.now().getYear();

        int capaciteMax = 0;
        if (TypeChambre.SIMPLE.equals(chambre.getTypeChambre())) {
            capaciteMax = 1;
        } else if (TypeChambre.DOUBLE.equals(chambre.getTypeChambre())) {
            capaciteMax = 2;
        } else if (TypeChambre.TRIPLE.equals(chambre.getTypeChambre())) {
            capaciteMax = 3;
        }

        if (chambre.getReservations().size() >= capaciteMax) {
            throw new IllegalStateException("La capacité maximale de la chambre est atteinte.");
        }

        Reservation reservation = new Reservation();
        reservation.setIdReservation(idReservation);
        reservation.setAnneeUniversitaire(LocalDate.now());
        reservation.setEstValide(true);

        Set<Etudiant> etudiants = new HashSet<>();
        etudiants.add(etudiant);
        reservation.setEtudiants(etudiants);

        Reservation savedReservation = reservationRepo.save(reservation);

        chambre.getReservations().add(savedReservation);
        chambreRepo.save(chambre);

        return savedReservation;
    }

    @Override
    @Transactional
    public Reservation annulerReservation(Long cinEtudiant) {
        Etudiant etudiant = etudiantRepo.findByCin(cinEtudiant);

        Reservation reservation = etudiant.getReservations().stream()
                .filter(Reservation::isEstValide)
                .findFirst()
                .orElse(null);

        reservation.setEstValide(false);

        reservation.getEtudiants().remove(etudiant);

        Chambre chambreAssociee = chambreRepo.findByReservationsContains(reservation);
        if (chambreAssociee != null) {
            chambreAssociee.getReservations().remove(reservation);
            chambreRepo.save(chambreAssociee);
        }

        return reservationRepo.save(reservation);
    }
}
