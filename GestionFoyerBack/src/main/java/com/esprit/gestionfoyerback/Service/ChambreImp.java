package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.Enum.TypeChambre;
import com.esprit.gestionfoyerback.Exception.ResourceNotFoundException;
import com.esprit.gestionfoyerback.Repository.BlocRepo;
import com.esprit.gestionfoyerback.Repository.ChambreRepo;
import com.esprit.gestionfoyerback.dto.AddChambreDto;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChambreImp implements ChambreService {
    private final ChambreRepo chambreRepositorie;
    private final BlocRepo blocRepositorie;

    @Override
    public Chambre addChambre(Chambre chambre) {
        return chambreRepositorie.save(chambre);
    }

    @Override
    public List<Chambre> getAllChambre() {
        return chambreRepositorie.findAll();
    }

    @Override
    public Chambre findChambreById(Long id) {
        return chambreRepositorie.findById(id).isPresent() ? chambreRepositorie.findById(id).get() : null;
    }

    @Override
    public String deleteChambreById(Long id) {
        if(chambreRepositorie.findById(id).isPresent()){
            chambreRepositorie.deleteById(id);
            return "Deleted"+chambreRepositorie.findById(id).get().toString();
        }else
            return "etudiant with ID : "+id+" Doesn't exist";
    }

    @Override
    public Chambre updateChambre(long id, Chambre upchambre) {
        Chambre chambre = chambreRepositorie.findById(id).orElse(null);

        chambre.setNumeroChambre(upchambre.getNumeroChambre());
        chambre.setTypeC(upchambre.getTypeC());


        return  chambreRepositorie.save(chambre);
    }

    @Override
    public List<Chambre> getChambresParBlocEtType(Long idBloc, TypeChambre typeC) {
        return chambreRepositorie.getChambresParBlocEtType(idBloc, typeC);
    }

    @Override
    public ResponseEntity<String> addChambreToBloc(AddChambreDto chambre) {
        Bloc bloc = blocRepositorie.findByNomBloc(chambre.getNomBloc()).orElseThrow(() -> new EntityNotFoundException("bloc not found"));

        Chambre newchambre = new Chambre();
        newchambre.setNumeroChambre(chambre.getNumeroChambre());
        newchambre.setTypeC(chambre.getTypeC());
        newchambre.setBlocs(bloc);

        bloc.getChambres().add(newchambre);

        blocRepositorie.save(bloc);

        return ResponseEntity.ok("chambre added to bloc successfully");
    }

    @Override
    public List<Chambre> getChambresByBloc(Long blockId) {
        return chambreRepositorie.findByBlocs_IdBloc(blockId);
    }

    @Override
    public Chambre updateChambre(long id, AddChambreDto upchambre) {
        Chambre chambre = chambreRepositorie.findById(id).orElseThrow(()->new ResourceNotFoundException("Not found tutorial with id "));
        Bloc bloc = blocRepositorie.findByNomBloc(upchambre.getNomBloc())
                .orElseThrow(() -> new EntityNotFoundException("Foyer not found"));

        chambre.setNumeroChambre(upchambre.getNumeroChambre());
        chambre.setTypeC(upchambre.getTypeC());
        chambre.setBlocs(bloc);


        return  chambreRepositorie.save(chambre);
    }
}
