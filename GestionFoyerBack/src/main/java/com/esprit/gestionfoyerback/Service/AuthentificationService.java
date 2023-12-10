package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.AuthenticationResponse;
import com.esprit.gestionfoyerback.Entity.Etudiant;
import com.esprit.gestionfoyerback.Entity.RefreshTokenRequest;

public interface AuthentificationService {
    Etudiant registerEtudiant(Etudiant etudiant);
    Etudiant registerAdmin(Etudiant etudiant);
    AuthenticationResponse login(String email, String password);
    AuthenticationResponse refreshToken(RefreshTokenRequest refreshToken);
    Etudiant updateUser(Etudiant etudiant);
}
