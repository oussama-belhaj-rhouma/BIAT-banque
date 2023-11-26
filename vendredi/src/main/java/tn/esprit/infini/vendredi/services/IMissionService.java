package tn.esprit.infini.vendredi.services;
import tn.esprit.infini.vendredi.entities.Mission;

import java.util.List;

public interface IMissionService {
    List<Mission> retrieveAllMissions();

    Mission addMission(Mission a);

    Mission updateMission(Mission a);

    Mission retrieveMission(Long MissionId);

    void deleteMission( Long MissionId);

}
