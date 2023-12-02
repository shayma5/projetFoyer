package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Foyer;
import com.esprit.gestionfoyerback.Entity.Reservation;

import java.util.List;

public interface ReservationService {

    List<Reservation> retrieveAllReservation();

    Reservation updateReservation (Reservation reservation);

    Reservation retrieveReservation (long idReservation);

    Reservation ajouterReservation (Long idChambre, Long cinEtudiant) ;

    Reservation annulerReservation (Long cinEtudiant) ;
}
