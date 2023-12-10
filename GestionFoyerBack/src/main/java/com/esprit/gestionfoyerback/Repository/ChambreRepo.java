package com.esprit.gestionfoyerback.Repository;

import com.esprit.gestionfoyerback.Entity.Bloc;
import com.esprit.gestionfoyerback.Entity.Chambre;
import com.esprit.gestionfoyerback.Entity.Reservation;
import com.esprit.gestionfoyerback.Enum.TypeChambre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ChambreRepo extends JpaRepository<Chambre,Long> {
    @Query("SELECT c FROM Chambre c WHERE c.blocs.idBloc = :idBloc AND c.typeC = :typeC")
    List<Chambre> getChambresParBlocEtType(Long idBloc, TypeChambre typeC);

    Chambre findByReservationsContains(Reservation reservation);

    List<Chambre> findChambreByBlocs(Bloc bloc);
    List<Chambre> findByBlocs_IdBloc(long idBloc);
}
