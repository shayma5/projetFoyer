package com.esprit.gestionfoyerback.dto;

import  com.esprit.gestionfoyerback.Enum.TypeChambre;

public class AddChambreDto {
    private String nomBloc;
    Long numeroChambre;
    TypeChambre typeC;


    public AddChambreDto() {
    }

    public AddChambreDto(Long numeroChambre, TypeChambre typeC, String nomBloc) {
        this.numeroChambre = numeroChambre;
        this.typeC = typeC;
        this.nomBloc = nomBloc;
    }

    public Long getNumeroChambre() {
        return numeroChambre;
    }

    public void setNumeroChambre(Long numeroChambre) {
        this.numeroChambre = numeroChambre;
    }

    public TypeChambre getTypeC() {
        return typeC;
    }

    public void setTypeC(TypeChambre typeC) {
        this.typeC = typeC;
    }

    public String getNomBloc() {
        return nomBloc;
    }

    public void setNomBloc(String nomBloc) {
        this.nomBloc = nomBloc;
    }
}
