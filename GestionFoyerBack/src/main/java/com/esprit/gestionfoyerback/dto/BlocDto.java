package com.esprit.gestionfoyerback.dto;

public class BlocDto {


    private  long idBloc ;
    private String nomBloc;
    private String nomFoyer;
    private long capaciteBloc;

    public BlocDto() {}

    public BlocDto(String nomBloc, String nomFoyer, long capaciteBloc,long idBloc) {
        this.idBloc = idBloc;
        this.nomBloc = nomBloc;
        this.nomFoyer = nomFoyer;
        this.capaciteBloc = capaciteBloc;
    }

    public void setIdBloc(long idBloc) {
        this.idBloc = idBloc;
    }

    public long getIdBloc() {
        return idBloc;
    }

    public String getNomBloc() {
        return nomBloc;
    }

    public String getNomFoyer() {
        return nomFoyer;
    }

    public long getCapaciteBloc() {
        return capaciteBloc;
    }

    public void setNomBloc(String nomBloc) {
        this.nomBloc = nomBloc;
    }

    public void setNomFoyer(String nomFoyer) {
        this.nomFoyer = nomFoyer;
    }

    public void setCapaciteBloc(long capaciteBloc) {
        this.capaciteBloc = capaciteBloc;
    }
}