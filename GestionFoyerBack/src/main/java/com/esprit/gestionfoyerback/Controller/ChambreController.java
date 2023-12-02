package com.esprit.gestionfoyerback.Controller;

import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.Enum.TypeChambre;
import com.esprit.gestionfoyerback.Service.ChambreService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("chambre")
@RequiredArgsConstructor
public class ChambreController {
    private final ChambreService chambreService;

    @GetMapping
    public List<Chambre> retrieveAllChambres() {
        return chambreService.retrieveAllChambres();
    }

    @PostMapping
    public Chambre addChambre(@RequestBody Chambre chambre) {
        return chambreService.addChambre(chambre);
    }

    @PutMapping
    public Chambre updateChambre(@RequestBody Chambre chambre) {
        return chambreService.updateChambre(chambre);
    }

    @GetMapping("{idChambre}")
    public Chambre retrieveChambre(@PathVariable long idChambre) {
        return chambreService.retrieveChambre(idChambre);
    }

    @GetMapping("/getChambresParBlocEtType/{idBloc}/{typeChambre}")
    public List<Chambre> getChambresParBlocEtType(@PathVariable Long idBloc, @PathVariable TypeChambre typeChambre) {
        return chambreService.getChambresParBlocEtType(idBloc, typeChambre);
    }

    @GetMapping("/nomByUniversite/{nomUniversite}")
    public List<Chambre> getChambresParNomUniversite(@PathVariable String nomUniversite) {
        return chambreService.getChambresParNomUniversite(nomUniversite);
    }

    @GetMapping("/nonReserveByUniversiteAndType/{nomUniversite}/{typeChambre}/{anneeUniversitaire}")
    public List<Chambre> getChambresNonReserveParNomUniversiteEtTypeChambre(
            @PathVariable String nomUniversite,
            @PathVariable TypeChambre typeChambre,
            @PathVariable String anneeUniversitaire) {
        return chambreService.getChambresNonReserveParNomUniversiteEtTypeChambre(nomUniversite, typeChambre, anneeUniversitaire);
    }
}
