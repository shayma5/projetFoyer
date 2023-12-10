package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Foyer;
import com.esprit.gestionfoyerback.Entity.Reservation;

import java.util.List;

public interface ReservationService {
    List<Reservation> getReservationsForCurrentUser(long currentUserCin);

    Reservation addReservation(Reservation reservation);

    List<Reservation> findAllReservation();

    Reservation findReservationById(String id);

    String deleteReservationById(String id);
    Reservation updateReservation(Reservation reservation);

    public Reservation ajouterReservation (long idChambre, long cinEtudiant);

    Reservation annulerReservation (Long cinEtudiant) ;
}
