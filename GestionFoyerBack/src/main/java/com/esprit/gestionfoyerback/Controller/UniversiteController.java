package com.esprit.gestionfoyerback.Controller;

import com.esprit.gestionfoyerback.Entity.Universite;
import com.esprit.gestionfoyerback.Service.UniversiteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("universite")
@RequiredArgsConstructor

public class UniversiteController {
    private final UniversiteService iUniversiteService;
    @GetMapping
    public List<Universite> retrieveAllUniversities() {
        return iUniversiteService.retrieveAllUniversities();
    }

    @PostMapping
    public Universite addUniversite(@RequestBody Universite u) {
        return iUniversiteService.addUniversite(u);
    }
    @PutMapping
    public Universite updateUniversite(@RequestBody Universite u) {
        return iUniversiteService.updateUniversite(u);
    }

    @PutMapping("update2/{idUniversite}")
    public Universite updateUniversite2(@PathVariable long idUniversite, @RequestBody Universite updatedUniversite) {
        return iUniversiteService.updateUniversit2(idUniversite,updatedUniversite);
    }

    @GetMapping("{idUniversite}")
    public Universite retrieveUniversite(@PathVariable long idUniversite) {
        return iUniversiteService.retrieveUniversite(idUniversite);
    }
    @DeleteMapping("{idUniversite}")
    public void  removeuniv(@PathVariable long idUniversite) {
        iUniversiteService.removeuniv(idUniversite);
    }

    //************************************************************
    @PutMapping("desaffecterFoyerAUniv/{idUniversite}")
    public Universite desaffecterFoyerAUniversite (@PathVariable long idUniversite){
        return iUniversiteService.desaffecterFoyerAUniversite(idUniversite);
    }
    @GetMapping("getIdParNom/{nomuniv}")
    public long getIdParNom(@PathVariable String nomuniv) {
        return iUniversiteService.getIdParNom(nomuniv);
    }
    @GetMapping("getAllDispo")
    public List<Universite> getAllDispo() {
        return iUniversiteService.getAllDispo();
    }
}
