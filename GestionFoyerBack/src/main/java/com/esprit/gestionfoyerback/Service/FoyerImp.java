package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.Entity.Foyer;
import com.esprit.gestionfoyerback.Entity.Universite;
import com.esprit.gestionfoyerback.Repository.BlocRepo;
import com.esprit.gestionfoyerback.Repository.FoyerRepo;
import com.esprit.gestionfoyerback.Repository.UniversiteRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class FoyerImp implements FoyerService{
    private final FoyerRepo foyerRepo;
    private final UniversiteRepo universiteRepo;
    private final BlocRepo blocRepo;


    @Override
    public List<Foyer> retrieveAllFoyers() {
        return(List<Foyer>) foyerRepo.findAll();
    }

    @Override
    public Foyer addFoyer(Foyer f) {
        return foyerRepo.save(f);
    }

    @Override
    public Foyer updateFoyer(Foyer f) {
        return foyerRepo.save(f);
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
    public Foyer ajouterFoyerEtAffecterAUniversite(Foyer foyer, long idUniversite) {
        Universite universite=universiteRepo.findById(idUniversite).orElse(null);
        universite.setFoyers(foyer);
        foyerRepo.save(foyer);
        universiteRepo.save(universite);

        return foyer ;
    }

    @Override
    public Foyer updateFoyer2(long idFoyer, Foyer f) {
        Foyer existingFoyer = foyerRepo.findById(idFoyer)
                .orElseThrow(() -> new IllegalArgumentException("Universite not found with id: " + idFoyer));

        // Mettez à jour les champs nécessaires
        existingFoyer.setNomFoyer(f.getNomFoyer());
        existingFoyer.setCapaciteFoyer(f.getCapaciteFoyer());
        // Mettez à jour d'autres champs si nécessaire

        // Enregistrez la mise à jour dans la base de données
        return foyerRepo.save(existingFoyer);
    }

    @Override
    public List<String> getnom() {
        List<Foyer> foyers = (List<Foyer>) foyerRepo.findAll();
        return foyers.stream()
                .map(Foyer::getNomFoyer)
                .collect(Collectors.toList());
    }

    @Override
    public long getIdParNom(String nomFoyer) {
        Foyer foyer=foyerRepo.findByNomFoye(nomFoyer);
        long id =foyer.getIdFoyer();
        return id ;
    }

}
