package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.Enum.TypeChambre;
import com.esprit.gestionfoyerback.dto.AddChambreDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ChambreService {
    Chambre addChambre(Chambre  chambre);
    List<Chambre> getAllChambre();
    Chambre findChambreById(Long id);
    String deleteChambreById(Long id);
    Chambre updateChambre(long id, Chambre upchambre);
    List<Chambre> getChambresParBlocEtType (Long idBloc, TypeChambre typeC) ;
    public Chambre updateChambre(long id, AddChambreDto upchambre);
    public ResponseEntity<String> addChambreToBloc(AddChambreDto chambre);
    List<Chambre> getChambresByBloc(Long blockId);

}
