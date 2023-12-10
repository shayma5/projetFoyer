package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.dto.AddBlocRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BlocService {
    Bloc addBloc(Bloc bloc);

    List<Bloc> getAllBloc();

    Bloc findBlocById(Long id);

    public void deleteBlocById(long id);
    Bloc updateBloc(long id, AddBlocRequest upbloc);

    Bloc addBlocAndAsigneToFoyer(long idFoyer, Bloc bloc);
    Bloc affecterChambresABloc(List<Long> idChambre, Long idBloc);

    public ResponseEntity<String> addBlocToFoyer(AddBlocRequest request);

    List<Bloc> getBlocksByFoyer(long idFoyer);
    List<Chambre> getChambresByBloc(long blockId);
}
