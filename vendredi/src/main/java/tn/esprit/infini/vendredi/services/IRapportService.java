package tn.esprit.infini.vendredi.services;

import org.springframework.web.multipart.MultipartFile;
import tn.esprit.infini.vendredi.entities.ERapport;
import tn.esprit.infini.vendredi.entities.Rapport;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface IRapportService {
    List<Rapport> retrieveAllRapports();

    Rapport addRapport(Rapport a);

    Rapport updateRapport (Rapport a);

    String uploadFile(MultipartFile file) throws IOException;

    Optional<Rapport> retrieveRapport (Long RapportId);

    void deleteRapport( Long RapportId);

    List<Rapport> findRapportByAnnee(Long annee);
    List<Rapport> findRapportByType(ERapport s);

}
