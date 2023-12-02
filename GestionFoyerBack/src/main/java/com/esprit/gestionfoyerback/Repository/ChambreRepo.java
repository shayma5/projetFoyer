package com.esprit.gestionfoyerback.Repository;

import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.Entity.Reservation;
import com.esprit.gestionfoyerback.Enum.TypeChambre;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ChambreRepo extends CrudRepository<Chambre,Long> {
    Chambre findByReservationsContains(Reservation reservation);

    @Query("SELECT c FROM Chambre c WHERE c.blocs.idBloc = :idBloc AND c.typeChambre = :typeChambre")
    List<Chambre> getChambresParBlocEtType(Long idBloc, TypeChambre typeChambre);

    @Query("SELECT chambre FROM Chambre chambre " +
            "JOIN chambre.blocs bloc " +
            "JOIN bloc.foyer.universite universite " +
            "WHERE universite.nomUniversite = :nomUniversite")
    List<Chambre> findChambresByNomUniversite(String nomUniversite);

    @Query("SELECT c FROM Chambre c " +
            "JOIN c.blocs bloc " +
            "JOIN bloc.foyer foyer " +
            "WHERE foyer.universite.nomUniversite = :nomUniversite " +
            "AND c.typeChambre = :type " +
            "AND NOT EXISTS (SELECT r FROM c.reservations r " +
            "WHERE r.anneeUniversitaire = :anneeUniversitaire)")
    List<Chambre> getChambresNonReserveParNomUniversiteEtTypeChambre(String nomUniversite, TypeChambre type, String anneeUniversitaire);
}
