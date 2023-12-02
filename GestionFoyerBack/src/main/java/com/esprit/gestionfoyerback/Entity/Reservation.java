package com.esprit.gestionfoyerback.Entity;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Reservation {
    @Id
    String idReservation;

    @Temporal(TemporalType.DATE)
    LocalDate anneeUniversitaire;

    boolean estValide;

    @ManyToMany(cascade = CascadeType.ALL )
    Set<Etudiant> etudiants;
}
