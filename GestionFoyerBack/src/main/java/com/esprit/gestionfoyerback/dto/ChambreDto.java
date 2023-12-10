package com.esprit.gestionfoyerback.dto;

import  com.esprit.gestionfoyerback.Enum.TypeChambre;

public class ChambreDto {

    private Long idChambre;
    private Long numeroChambre;
    private TypeChambre typeC;
    private String nomBloc;

    public ChambreDto() {
    }

    public ChambreDto(Long idChambre, Long numeroChambre, TypeChambre typeC, String nomBloc) {
        this.idChambre = idChambre;
        this.numeroChambre = numeroChambre;
        this.typeC = typeC;
        this.nomBloc = nomBloc;
    }

    public Long getIdChambre() {
        return idChambre;
    }

    public void setIdChambre(Long idChambre) {
        this.idChambre = idChambre;
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
