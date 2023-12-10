package com.esprit.gestionfoyerback.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.esprit.gestionfoyerback.Entity.AuthenticationResponse;
import com.esprit.gestionfoyerback.Entity.Etudiant;
import com.esprit.gestionfoyerback.Entity.RefreshTokenRequest;
import com.esprit.gestionfoyerback.Entity.User;
import com.esprit.gestionfoyerback.Service.AuthentificationService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {
    private final AuthentificationService authenticationServices;

    @PostMapping("/registerEtudiant")
    public Etudiant registerEtudiant(@RequestBody Etudiant etudiant) {
        return authenticationServices.registerEtudiant(etudiant);
    }

    @PostMapping("/registerAdmin")
    public Etudiant registerAdmin(@RequestBody Etudiant etudiant) {
        return authenticationServices.registerAdmin(etudiant);
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody User user) {
        System.out.println("1");
        return authenticationServices.login(user.getEmail(), user.getPassword());
    }

    @PostMapping("/refreshToken")
    public AuthenticationResponse refreshToken(@RequestBody RefreshTokenRequest refreshToken) {
        return authenticationServices.refreshToken(refreshToken);
    }

    @PutMapping("/update")
    public Etudiant updateUser(@RequestBody Etudiant etudiant) {
        return authenticationServices.updateUser(etudiant);
    }
}
