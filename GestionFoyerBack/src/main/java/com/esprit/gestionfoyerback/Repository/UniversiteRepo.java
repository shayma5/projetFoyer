package com.esprit.gestionfoyerback.Repository;

import com.esprit.gestionfoyerback.Entity.Universite;
import org.springframework.data.repository.CrudRepository;

public interface UniversiteRepo extends CrudRepository<Universite,Long> {
    Universite findByNomUniversite(String nomUniversite);
}
