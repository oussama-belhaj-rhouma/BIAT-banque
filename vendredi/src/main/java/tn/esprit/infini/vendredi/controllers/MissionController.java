package tn.esprit.infini.vendredi.controllers;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.infini.vendredi.entities.Mission;
import tn.esprit.infini.vendredi.services.MissionServive;

import java.util.List;
@RestController
@AllArgsConstructor
@RequestMapping("/Mission")
public class MissionController {
        MissionServive missionServive;
@GetMapping("/retrieve-all-Missions")
@PreAuthorize("hasRole('AUDIT')")

public List<Mission> getMissions() {
        List<Mission> listMissions = missionServive.retrieveAllMissions() ;
        return listMissions;
        }
@GetMapping("/retrieve-Mission/{Mission-id}")
@PreAuthorize("hasRole('AUDIT')")

public Mission retreiveMission(@PathVariable("Mission-id") long MissionId) {
        return missionServive.retrieveMission(MissionId);
        }
@PostMapping("/add-Mission")
@PreAuthorize("hasRole('AUDIT')")

public Mission addMission(@RequestBody Mission a) {
    Mission mission = missionServive.addMission(a);
        return mission;
        }
@DeleteMapping("/remove-Mission/{Mission-id}")
@PreAuthorize("hasRole('AUDIT')")

public void removeMission(@PathVariable("Mission-id") long MissionId) {
    missionServive.deleteMission(MissionId);
        }


@PutMapping("/update-Mission")
@PreAuthorize("hasRole('AUDIT')")

public Mission updateMission(@RequestBody Mission a) {
    Mission mission= missionServive.updateMission(a);
        return mission;
        }
        }


