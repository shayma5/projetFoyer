package com.esprit.gestionfoyerback.Repository;

import com.esprit.gestionfoyerback.Entity.Etudiant;
import com.esprit.gestionfoyerback.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;

public interface ReservationRepo extends JpaRepository<Reservation, String> {
    List<Reservation> findByEtudiants(Etudiant currentUser);
    boolean existsByEtudiantsCinAndAnneUniversitereBetween(long etudiants_cin, LocalDate startDate, LocalDate endDate);
}
