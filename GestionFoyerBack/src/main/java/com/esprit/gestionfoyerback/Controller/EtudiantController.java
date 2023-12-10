package com.esprit.gestionfoyerback.Controller;

import com.esprit.gestionfoyerback.Entity.Etudiant;
import com.esprit.gestionfoyerback.Service.EtudiantService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("etudiant")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class EtudiantController {
    private final EtudiantService etudiantService;

    @GetMapping
    public List<Etudiant> retrieveAllEtudiants() {
        return etudiantService.retrieveAllEtudiants();
    }

    @GetMapping("/admins")
    public List<Etudiant> retrieveAllAdmins() {
        return etudiantService.retrieveAllAdmins();
    }

    @PostMapping
    public List<Etudiant> addEtudiants(@RequestBody List<Etudiant> etudiants) {
        return etudiantService.addEtudiants(etudiants);
    }

    @PutMapping
    public Etudiant updateEtudiant(@RequestBody Etudiant etudiant) {
        return etudiantService.updateEtudiant(etudiant);
    }

    @GetMapping("{idEtudiant}")
    public Etudiant retrieveEtudiant(@PathVariable long idEtudiant) {
        return etudiantService.retrieveEtudiant(idEtudiant);
    }

    @DeleteMapping("{idEtudiant}")
    public void removeEtudiant(@PathVariable long idEtudiant) {
        etudiantService.removeEtudiant(idEtudiant);
    }
}
