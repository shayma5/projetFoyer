package com.esprit.gestionfoyerback.Repository;

import com.esprit.gestionfoyerback.Entity.Foyer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface FoyerRepo extends JpaRepository<Foyer,Long> {
    //Foyer findByNomFoyer(String nomFoyer);

    @Query("select c from Foyer c where c = :nomFoyer")
    Foyer findByNomFoye(String nomFoyer);

    Optional<Foyer> findByNomFoyer(String nomFoyer);
}
