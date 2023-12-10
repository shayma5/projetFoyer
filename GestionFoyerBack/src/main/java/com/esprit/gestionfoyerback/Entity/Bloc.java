package com.esprit.gestionfoyerback.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;


import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
@ToString
@Table(name = "Bloc")
public class Bloc {
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private long idBloc;

    String nomBloc;
    Long capaciteBloc;


    @ManyToOne
    @JoinColumn(name = "idFoyer")
    @JsonIgnore
    Foyer foyer;

    @OneToMany(mappedBy = "blocs", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Chambre> chambres;

}
