package com.esprit.gestionfoyerback.Entity;

import com.esprit.gestionfoyerback.Enum.TypeChambre;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
@ToString
@Table(name = "Chambre")
public class Chambre {
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private long idChambre;

    Long numeroChambre;

    @Enumerated(EnumType.STRING)
    TypeChambre typeC;


    @ManyToOne
    @JoinColumn(name = "idBloc")
    @JsonIgnore
    Bloc blocs;

    @OneToMany
    Set<Reservation> reservations;
}