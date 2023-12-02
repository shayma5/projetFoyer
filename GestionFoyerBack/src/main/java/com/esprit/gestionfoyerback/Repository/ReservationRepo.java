package com.esprit.gestionfoyerback.Repository;

import com.esprit.gestionfoyerback.Entity.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;

public interface ReservationRepo extends CrudRepository<Reservation, Long> {
    /*@Query("SELECT r FROM Reservation r " +
            "JOIN r.etudiants e " +
            "JOIN e.Reservations c " +
            "JOIN c.bloc bloc " +  // assuming 'blocs' is the field in Chambre
            "JOIN bloc.foyer universite " +
            "WHERE r.anneeUniversitaire = :anneeUniversitaire " +
            "AND universite.nomUniversite = :nomUniversite")
    List<Reservation> getReservationParAnneeUniversitaireEtNomUniversite(
            LocalDate anneeUniversitaire, String nomUniversite);*/
}
