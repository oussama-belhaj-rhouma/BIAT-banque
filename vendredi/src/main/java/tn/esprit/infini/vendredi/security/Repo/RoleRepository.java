package tn.esprit.infini.vendredi.security.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.infini.vendredi.security.Models.ERole;
import tn.esprit.infini.vendredi.security.Models.Role;

import java.util.Optional;
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}