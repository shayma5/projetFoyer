package com.esprit.gestionfoyerback.Repository;
import com.esprit.gestionfoyerback.Entity.Bloc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface BlocRepo extends JpaRepository<Bloc,Long> {
    Optional<Bloc> findByNomBloc(String nomBloc);
    List<Bloc> findByFoyer_IdFoyer(long idFoyer);
}
