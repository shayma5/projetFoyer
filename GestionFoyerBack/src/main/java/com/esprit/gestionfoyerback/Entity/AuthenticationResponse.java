package com.esprit.gestionfoyerback.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationResponse {
    String accessToken;
    String refreshToken;

    long id;
    String nom;
    String prenom;
    String email;
    String role;
    long cin;
    String ecole;

    @Temporal(TemporalType.DATE)
    Date dateNaissance;
    Set<Reservation> Reservations;
}
