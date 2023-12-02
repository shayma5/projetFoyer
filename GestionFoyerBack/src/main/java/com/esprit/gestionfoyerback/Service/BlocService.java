package com.esprit.gestionfoyerback.Service;

import com.esprit.gestionfoyerback.Entity.Bloc;

import java.util.List;

public interface BlocService {
    List<Bloc> retrieveAllBlocs();

    Bloc updateBloc (Bloc bloc);

    Bloc addBloc (Bloc bloc);

    Bloc retrieveBloc (long idBloc);

    void removeBloc (long idBloc);

    Bloc affecterChambresABloc(List<Long> idChambre, Long idBloc);
}
