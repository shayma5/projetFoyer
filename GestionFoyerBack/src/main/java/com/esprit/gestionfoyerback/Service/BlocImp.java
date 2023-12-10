package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.Entity.Foyer;
import com.esprit.gestionfoyerback.Exception.ResourceNotFoundException;
import com.esprit.gestionfoyerback.Repository.BlocRepo;
import com.esprit.gestionfoyerback.Repository.ChambreRepo;
import com.esprit.gestionfoyerback.Repository.FoyerRepo;
import com.esprit.gestionfoyerback.dto.AddBlocRequest;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BlocImp implements BlocService {
    private final BlocRepo blocRepositorie;
    private final FoyerRepo foyerRepositorie;
    private final ChambreRepo chambreRepository;

    @Override
    public Bloc addBloc(Bloc bloc  ) {
        Foyer foyer= bloc.getFoyer();
        bloc.setFoyer(foyer);
        return blocRepositorie.save(bloc);
    }

    @Override
    public List<Bloc> getAllBloc() {
        return blocRepositorie.findAll();
    }

    @Override
    public Bloc findBlocById(Long id) {
        return blocRepositorie.findById(id).isPresent() ? blocRepositorie.findById(id).get() : null;
    }

    @Override
    public void deleteBlocById(long id) {
        blocRepositorie.deleteById(id);

    }

    @Override
    public Bloc updateBloc(long id, AddBlocRequest upbloc) {
        Bloc bloc = blocRepositorie.findById(id).orElseThrow(()->new ResourceNotFoundException("Not found tutorial with id "));
        Foyer foyer = foyerRepositorie.findByNomFoyer(upbloc.getNomFoyer()).orElseThrow(() -> new EntityNotFoundException("Foyer not found"));

        bloc.setNomBloc(upbloc.getNomBloc());
        bloc.setCapaciteBloc(upbloc.getCapaciteBloc());
        bloc.setFoyer(foyer);


        return  blocRepositorie.save(bloc);
    }

    @Override
    public Bloc addBlocAndAsigneToFoyer(long idFoyer, Bloc bloc) {
        Foyer foyer = foyerRepositorie.findById(idFoyer).orElseThrow(()->new ResourceNotFoundException("Not found tutorial with id ="+idFoyer));
        bloc.setFoyer(foyer);
        return blocRepositorie.save(bloc);
    }

    @Override
    public Bloc affecterChambresABloc(List<Long> idChambre, Long idBloc) {
        Bloc bloc = blocRepositorie.findById(idBloc).orElseThrow(()->new ResourceNotFoundException("Not found tutorial with id ="+idBloc));

        for(Long id:idChambre){
            Chambre chambre = chambreRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Not found tutorial with id ="+idChambre));
            chambre.setBlocs(bloc);
            chambreRepository.save(chambre);
        }

        return blocRepositorie.save(bloc);
    }

    @Override
    public ResponseEntity<String> addBlocToFoyer(AddBlocRequest request) {
        Foyer foyer = foyerRepositorie.findByNomFoyer(request.getNomFoyer()).orElseThrow(() -> new EntityNotFoundException("Foyer not found"));

        Bloc bloc = new Bloc();
        bloc.setNomBloc(request.getNomBloc());
        bloc.setCapaciteBloc(request.getCapaciteBloc());
        bloc.setFoyer(foyer);

        foyer.getBlocs().add(bloc);

        foyerRepositorie.save(foyer);

        return ResponseEntity.ok("Bloc added to Foyer successfully");
    }

    @Override
    public List<Bloc> getBlocksByFoyer(long idFoyer) {
        return blocRepositorie.findByFoyer_IdFoyer(idFoyer);
    }

    @Override
    public List<Chambre> getChambresByBloc(long blockId) {
        Optional<Bloc> blockOptional = blocRepositorie.findById(blockId);
        return blockOptional.map(Bloc::getChambres).orElse(Collections.emptyList());
    }


}
