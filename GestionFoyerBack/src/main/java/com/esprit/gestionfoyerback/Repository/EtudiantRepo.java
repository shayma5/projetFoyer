package com.esprit.gestionfoyerback.Repository;

import com.esprit.gestionfoyerback.Entity.Etudiant;
import com.esprit.gestionfoyerback.Enum.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EtudiantRepo extends JpaRepository<Etudiant,Long> {
    Etudiant findByCin(Long cin);
    List<Etudiant> findByRole(Role role);
}
