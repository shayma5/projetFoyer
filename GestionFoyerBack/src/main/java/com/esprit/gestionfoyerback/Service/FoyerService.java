package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Foyer;

import java.util.List;

public interface FoyerService {
    List<Foyer> retrieveAllFoyers();

    Foyer addFoyer (Foyer f);

    Foyer updateFoyer (Foyer f);

    Foyer retrieveFoyer (long idFoyer);

    void removeFoyer (long idFoyer);

    Foyer ajouterFoyerEtAffecterAUniversite(Foyer foyer, long idUniversite);

    Foyer updateFoyer2(long idFoyer, Foyer f);

    List<String> getnom();

    long getIdParNom(String nomFoyer);
}