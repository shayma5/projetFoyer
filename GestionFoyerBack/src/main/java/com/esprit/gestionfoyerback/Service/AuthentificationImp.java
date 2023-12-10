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

   /* public AuthenticationResponse login(String email, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        var user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        var jwt = jwtServices.generateToken(user);
        var refreshToken = jwtServices.generateRefreshToken(new HashMap<>(), user);

        AuthenticationResponse authenticationResponse = new AuthenticationResponse();

        authenticationResponse.setAccessToken(jwt);
        authenticationResponse.setRefreshToken(refreshToken);

        authenticationResponse.setRole(user.getRole().toString());
        return authenticationResponse;
    }*/

    public AuthenticationResponse login(String email, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        var user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        var jwt = jwtServices.generateToken(user);
        var refreshToken = jwtServices.generateRefreshToken(new HashMap<>(), user);

        AuthenticationResponse authenticationResponse;

        if (user instanceof Etudiant) {
            authenticationResponse = createStudentAuthenticationResponse((Etudiant) user, jwt, refreshToken);
        } else {
            authenticationResponse = createRegularUserAuthenticationResponse(user, jwt, refreshToken);
        }

        return authenticationResponse;
    }

    private AuthenticationResponse createStudentAuthenticationResponse(Etudiant etudiant, String jwt, String refreshToken) {
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        // Set student-specific fields
        authenticationResponse.setCin(etudiant.getCin());
        authenticationResponse.setEcole(etudiant.getEcole());
        authenticationResponse.setDateNaissance(etudiant.getDateNaissance());
        authenticationResponse.setReservations(etudiant.getReservations());
        // Set common fields
        setCommonAuthenticationResponseFields(authenticationResponse, jwt, refreshToken, etudiant);
        return authenticationResponse;
    }

    private AuthenticationResponse createRegularUserAuthenticationResponse(User user, String jwt, String refreshToken) {
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        // Set common fields
        setCommonAuthenticationResponseFields(authenticationResponse, jwt, refreshToken, user);
        return authenticationResponse;
    }

    private void setCommonAuthenticationResponseFields(AuthenticationResponse authenticationResponse, String jwt, String refreshToken, User user) {
        authenticationResponse.setAccessToken(jwt);
        authenticationResponse.setRefreshToken(refreshToken);
        authenticationResponse.setId(user.getId());
        authenticationResponse.setNom(user.getNom());
        authenticationResponse.setPrenom(user.getPrenom());
        authenticationResponse.setEmail(user.getEmail());
        authenticationResponse.setRole(user.getRole().toString());
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

    @Override
    public Etudiant updateUser(Etudiant etudiant) {
        return userRepository.save(etudiant);
    }
}
