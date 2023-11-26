package tn.esprit.infini.vendredi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.infini.vendredi.entities.ERapport;
import tn.esprit.infini.vendredi.entities.Rapport;

import java.util.List;

@Repository

public interface Rapportrepository extends JpaRepository<Rapport,Long> {
    List<Rapport> findByAnnee(Long annee);
    List<Rapport> findByType(ERapport s);


}
