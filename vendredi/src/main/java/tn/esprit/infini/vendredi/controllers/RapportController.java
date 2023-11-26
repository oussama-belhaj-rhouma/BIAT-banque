package tn.esprit.infini.vendredi.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.infini.vendredi.entities.ERapport;
import tn.esprit.infini.vendredi.entities.Rapport;
import tn.esprit.infini.vendredi.repository.Rapportrepository;
import tn.esprit.infini.vendredi.services.RapportService;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/Rapport")

public class RapportController {
    @Autowired
    RapportService rapportService;
    @Autowired
    Rapportrepository rapportrepository;
    @GetMapping("/retrieve-all-Rapports")
    @PreAuthorize("hasRole('AUDIT')")

    public List<Rapport> getRapports() {
        List<Rapport> listRapports = rapportService.retrieveAllRapports() ;
        return listRapports;
    }
    @GetMapping("/retrieve-Rapport/{Rapport-id}")
    @PreAuthorize("hasRole('AUDIT')")

    public Optional<Rapport> retreiveRapport(@PathVariable("Rapport-id") long RapportId) {
            return rapportService.retrieveRapport(RapportId);
    }
    @GetMapping("/retrieve-Rapport-by-annee/{annee}")
    @PreAuthorize("hasRole('AUDIT')")

    public List<Rapport> retreiveRapportByAnnee(@PathVariable("annee") long annee) {
        return rapportService.findRapportByAnnee(annee);
    }
    @GetMapping("/retrieve-Rapport-by-type/{s}")
    @PreAuthorize("hasRole('AUDIT')")

    public List<Rapport> retreiveRapportByType(@PathVariable("s") ERapport s) {
        return rapportService.findRapportByType(s);
    }

    @PostMapping("/add-Rapport")
    @PreAuthorize("hasRole('AUDIT')")

    public ResponseEntity<String> addRapport(
            @RequestPart("nomAgent") String nomAgent,
            @RequestPart("localisation") String localisation,
            @RequestPart("annee") String annee,
            @RequestPart("missionId") String missionId,
            @RequestPart("type") String type,
            @RequestPart("file") MultipartFile file
    ) {
        try {
            Rapport r = new Rapport();
            r.setNomAgent(nomAgent);
            r.setType(ERapport.valueOf(type));
            r.setAnnee(Long.valueOf(annee));
            r.setData(file.getBytes());
            r.setMissionId(Long.valueOf(missionId));
            r.setLocalisation(localisation);
            r.setFileName(file.getOriginalFilename());
            rapportrepository.save(r);
            return ResponseEntity.status(HttpStatus.OK).body("File uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file");
        }
    }


    @GetMapping("/download/{rapportId}")
    @PreAuthorize("hasRole('AUDIT')")

    public ResponseEntity<ByteArrayResource> downloadRapport(@PathVariable Long rapportId) throws IOException {
        Rapport rapport = rapportrepository.findById(rapportId)
                .orElseThrow(() -> new RuntimeException("Rapport not found"));

        ByteArrayResource resource = new ByteArrayResource(rapport.getData());

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + rapport.getFileName());

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(rapport.getData().length)
                .body(resource);
    }

    @DeleteMapping("/remove-Rapport/{Rapport-id}")
    @PreAuthorize("hasRole('AUDIT')")

    public void removeRapport(@PathVariable("Rapport-id") long RapportId) {
        rapportService.deleteRapport(RapportId);
    }
    @PutMapping("/update-Rapport")
    @PreAuthorize("hasRole('AUDIT')")

    public Rapport updateRapport(@RequestBody Rapport a) {
        Rapport rapport= rapportService.updateRapport(a);
        return rapport;
    }
}



