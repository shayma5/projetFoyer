package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Universite;

import java.util.List;

public interface UniversiteService {
    List<Universite> retrieveAllUniversities();

    Universite addUniversite (Universite u);

    Universite updateUniversite (Universite u);

    Universite retrieveUniversite (long idUniversite);

    Universite affecterFoyerAUniversite( String  nomFoyer ,   long iduniv);

    Universite desaffecterFoyerAUniversite(long idUniversite);

    Universite updateUniversit2(long idUniversite,Universite updatedUniversite);


    void removeuniv(long idUniversite);

    long getIdParNom(String nomuniv);

    List<Universite> getAllDispo();
}
