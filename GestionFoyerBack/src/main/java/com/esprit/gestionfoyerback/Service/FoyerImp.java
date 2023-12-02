package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.Entity.Foyer;
import com.esprit.gestionfoyerback.Entity.Universite;
import com.esprit.gestionfoyerback.Repository.BlocRepo;
import com.esprit.gestionfoyerback.Repository.FoyerRepo;
import com.esprit.gestionfoyerback.Repository.UniversiteRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FoyerImp implements FoyerService {
    private final FoyerRepo foyerRepo;
    private final UniversiteRepo universiteRepo;
    private final BlocRepo blocRepo;

    @Override
    public List<Foyer> retrieveAllFoyers() {
        return(List<Foyer>) foyerRepo.findAll();
    }

    @Override
    public Foyer addFoyer(Foyer foyer) {
        return foyerRepo.save(foyer);
    }

    @Override
    public Foyer updateFoyer(Foyer foyer) {
        return foyerRepo.save(foyer);
    }

    @Override
    public Foyer retrieveFoyer(long idFoyer) {
        return foyerRepo.findById(idFoyer).orElse(null);
    }

    @Override
    public void removeFoyer(long idFoyer) {
        foyerRepo.deleteById(idFoyer);
    }

    @Override
    @Transactional
    public Foyer ajouterFoyerEtAffecterAUniversite(Foyer foyer, Long idUniversite) {
        Universite universite = universiteRepo.findById(idUniversite).orElse(null);
        universite.setFoyer(foyer);
        for (Bloc bloc : foyer.getBlocs()) {
            bloc.setFoyer(foyer);
            blocRepo.save(bloc);
        }
        return foyer;
    }
}
