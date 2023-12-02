package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Foyer;

import java.util.List;

public interface FoyerService {
    List<Foyer> retrieveAllFoyers();

    Foyer addFoyer (Foyer foyer);

    Foyer updateFoyer (Foyer foyer);

    Foyer retrieveFoyer (long idFoyer);

    void removeFoyer (long idFoyer);

    Foyer ajouterFoyerEtAffecterAUniversite (Foyer foyer, Long idUniversite);
}
