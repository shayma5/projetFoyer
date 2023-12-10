package com.esprit.gestionfoyerback.Repository;

import com.esprit.gestionfoyerback.Entity.User;
import com.esprit.gestionfoyerback.Enum.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepo extends CrudRepository<User,Long> {
    Optional<User> findByEmail(String email);
    User findByRole(Role role);
}
