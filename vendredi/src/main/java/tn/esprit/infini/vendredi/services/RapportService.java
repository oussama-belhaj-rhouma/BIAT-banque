package tn.esprit.infini.vendredi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.infini.vendredi.config.FileResource;
import tn.esprit.infini.vendredi.entities.ERapport;
import tn.esprit.infini.vendredi.entities.Rapport;
import tn.esprit.infini.vendredi.repository.Rapportrepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@Service
public class RapportService implements IRapportService{
    @Autowired
    Rapportrepository rapportrepository;
    public List<Rapport> retrieveAllRapports() {
        return (List<Rapport>)  rapportrepository.findAll();    }

    public Rapport updateRapport (Rapport a) {
        return rapportrepository.save((a));    }
    public Rapport addRapport (Rapport a) {

        return rapportrepository.save(a);
    }
    public Optional<Rapport> retrieveRapport(Long RapportId) {
        return rapportrepository.findById(RapportId);
    }
    public void deleteRapport(Long RapportId) {
        rapportrepository.deleteById(RapportId);
    }
    public String uploadFile(MultipartFile multipartFile) throws IOException {
        String filename = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        Path fileStorage = Paths.get(FileResource.DIRECTORY).resolve(filename).toAbsolutePath().normalize();
        Files.copy(multipartFile.getInputStream(), fileStorage, StandardCopyOption.REPLACE_EXISTING);
        return filename;
    }


    public List<Rapport> findRapportByAnnee(Long annee) {
        return rapportrepository.findByAnnee(annee);
    }
    public List<Rapport> findRapportByType(ERapport s) {
        return rapportrepository.findByType(s);
    }

}
