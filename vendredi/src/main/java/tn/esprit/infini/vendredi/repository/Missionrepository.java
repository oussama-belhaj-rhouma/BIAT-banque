package tn.esprit.infini.vendredi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.infini.vendredi.entities.Mission;
@Repository

public interface Missionrepository extends JpaRepository<Mission,Long> {
}
