package com.esprit.gestionfoyerback.Entity;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Reservation {

    @Id
    private String idReservation;

    private LocalDate anneUniversitere;

    boolean estValide;

    @ManyToMany
    List<Etudiant> etudiants;
}
