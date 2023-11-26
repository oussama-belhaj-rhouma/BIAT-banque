package tn.esprit.infini.vendredi.controllers;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.infini.vendredi.entities.Filliale;
import tn.esprit.infini.vendredi.services.FillialeService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Filliale")

public class FillialeController {
    FillialeService fillialeService;
    @GetMapping("/retrieve-all-Filliales")
    @PreAuthorize("hasRole('AUDIT')")

    public List<Filliale> getFilliales() {
        List<Filliale> listFilliales = fillialeService.retrieveAllFilliales() ;
        return listFilliales;
    }
    @GetMapping("/retrieve-Filliale/{Filliale-id}")
    @PreAuthorize("hasRole('AUDIT')")

    public Filliale retreiveFilliale(@PathVariable("Filliale-id") long FillialeId) {
        return fillialeService.retrieveFilliale(FillialeId);
    }
    @PostMapping("/add-Filliale")
    @PreAuthorize("hasRole('AUDIT')")

    public Filliale addFilliale(@RequestBody Filliale a) {
        Filliale filliale = fillialeService.addFilliale(a);
        return filliale;
    }
    @DeleteMapping("/remove-Filliale/{Filliale-id}")
    @PreAuthorize("hasRole('AUDIT')")

    public void removeFilliale(@PathVariable("Mission-id") long FillialeId) {
        fillialeService.deleteFilliale(FillialeId);
    }
    @PutMapping("/update-Filliale")
    @PreAuthorize("hasRole('AUDIT')")

    public Filliale updateFilliale(@RequestBody Filliale a) {
        Filliale filliale= fillialeService.updateFilliale(a);
        return filliale;
    }
}

