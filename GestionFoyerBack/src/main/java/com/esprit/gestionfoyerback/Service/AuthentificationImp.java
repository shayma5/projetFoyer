package com.esprit.gestionfoyerback.Service;


import com.esprit.gestionfoyerback.Entity.AuthenticationResponse;
import com.esprit.gestionfoyerback.Entity.Etudiant;
import com.esprit.gestionfoyerback.Entity.RefreshTokenRequest;
import com.esprit.gestionfoyerback.Entity.User;
import com.esprit.gestionfoyerback.Enum.Role;
import com.esprit.gestionfoyerback.Repository.EtudiantRepo;
import com.esprit.gestionfoyerback.Repository.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthentificationImp implements AuthentificationService{
    private final UserRepo userRepository;
    private final EtudiantRepo etudiantRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final IJWTService jwtServices;


    public Etudiant registerEtudiant(Etudiant etudiant) {
        etudiant.setPassword(passwordEncoder.encode(etudiant.getPassword()));
        etudiant.setRole(Role.ETUDIANT);
        return etudiantRepository.save(etudiant);
    }

    public Etudiant registerAdmin(Etudiant etudiant) {
        etudiant.setPassword(passwordEncoder.encode(etudiant.getPassword()));
        etudiant.setRole(Role.ADMIN);
        return etudiantRepository.save(etudiant);
    }

    public AuthenticationResponse login(String email, String password) {
        System.out.println("1");
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        System.out.println("2");
        var user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        System.out.println("3");
        var jwt = jwtServices.generateToken(user);
        System.out.println("3");
        var refreshToken = jwtServices.generateRefreshToken(new HashMap<>(), user);
        System.out.println("4");

        AuthenticationResponse authenticationResponse = new AuthenticationResponse();

        authenticationResponse.setAccessToken(jwt);
        authenticationResponse.setRefreshToken(refreshToken);

        authenticationResponse.setRole(user.getRole().toString());
        return authenticationResponse;
    }

    public AuthenticationResponse refreshToken(RefreshTokenRequest refreshToken) {
        String userEmail = jwtServices.extractUsername(refreshToken.getRefreshToken());
        User user = userRepository.findByEmail(userEmail).orElseThrow(() -> new RuntimeException("User not found"));
        if(jwtServices.isTokenValid(refreshToken.getRefreshToken(), user)) {
            var jwt = jwtServices.generateToken(user);

            AuthenticationResponse authenticationResponse = new AuthenticationResponse();

            authenticationResponse.setAccessToken(jwt);
            authenticationResponse.setRefreshToken(refreshToken.getRefreshToken());
            return authenticationResponse;
        }
        return null;
    }
}
