package com.esprit.gestionfoyerback.Entity;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Etudiant extends User{

    @Column(unique = true)
    long cin;

    String ecole;

    @Temporal(TemporalType.DATE)
    Date dateNaissance;

    @ManyToMany(cascade = CascadeType.ALL,mappedBy = "etudiants")
    Set<Reservation> Reservations;
}
