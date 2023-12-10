package com.esprit.gestionfoyerback.Controller;

import com.esprit.gestionfoyerback.Entity.Foyer;
import com.esprit.gestionfoyerback.Service.FoyerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("foyer")
@RequiredArgsConstructor
public class FoyerController {
    private final FoyerService iFoyerService;
    @GetMapping
    public List<Foyer> retrieveAllFoyers() {
        return iFoyerService.retrieveAllFoyers();
    }

    @PostMapping
    public Foyer addFoyer(@RequestBody Foyer f) {
        return iFoyerService.addFoyer(f);
    }

    @PutMapping
    public Foyer updateFoyer(@RequestBody Foyer f) {
        return iFoyerService.updateFoyer(f);
    }
    @PutMapping("update2/{idFoyer}")
    public Foyer updateFoyer2(@PathVariable long idFoyer, @RequestBody Foyer f) {
        return iFoyerService.updateFoyer2(idFoyer,f);
    }

    @GetMapping("{idFoyer}")
    public Foyer retrieveFoyer(@PathVariable long idFoyer) {
        return iFoyerService.retrieveFoyer(idFoyer);
    }

    @DeleteMapping("{idFoyer}")
    public void removeFoyer(@PathVariable long idFoyer) {
        iFoyerService.removeFoyer(idFoyer);

    }
    @PostMapping("ajouterFoyerAffecterAUniv/{idUniversite}")
    public Foyer ajouterFoyerEtAffecterAUniversite (@RequestBody Foyer foyer,@PathVariable long idUniversite)  {
        return iFoyerService.ajouterFoyerEtAffecterAUniversite(foyer,idUniversite);
    }
    @GetMapping("nom")
    public List<String> getnom() {
        return iFoyerService.getnom();
    }
    @GetMapping("getIdParNom/{nomFoyer}")
    public long getIdParNom(@PathVariable String nomFoyer) {
        return iFoyerService.getIdParNom(nomFoyer);
    }

}
