package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Etudiant;
import com.esprit.gestionfoyerback.Enum.Role;
import com.esprit.gestionfoyerback.Repository.EtudiantRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EtudiantImp implements EtudiantService {
    private final EtudiantRepo etudiantRepo;

    @Override
    public List<Etudiant> retrieveAllEtudiants() {
        return etudiantRepo.findByRole(Role.ETUDIANT);
    }

    @Override
    public List<Etudiant> retrieveAllAdmins() {
        return etudiantRepo.findByRole(Role.ADMIN);
    }

    @Override
    public List<Etudiant> addEtudiants(List<Etudiant> etudiants) {
        return (List<Etudiant>) etudiantRepo.saveAll(etudiants);
    }

    @Override
    public Etudiant updateEtudiant(Etudiant e) {
        return etudiantRepo.save(e);
    }

    @Override
    public Etudiant retrieveEtudiant(long idEtudiant) {
        return etudiantRepo.findById(idEtudiant).orElse(null);
    }

    @Override
    public void removeEtudiant(long idEtudiant) {
        etudiantRepo.deleteById(idEtudiant);
    }
}
