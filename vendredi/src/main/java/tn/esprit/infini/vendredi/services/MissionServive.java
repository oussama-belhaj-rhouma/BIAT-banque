package tn.esprit.infini.vendredi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.infini.vendredi.entities.Mission;
import tn.esprit.infini.vendredi.repository.Missionrepository;

import java.util.List;
@Service
public class MissionServive implements  IMissionService{
    @Autowired
    Missionrepository missionrepository;
    @Override
    public List<Mission> retrieveAllMissions() {
        return (List<Mission>) missionrepository.findAll();    }


    @Override
    public Mission addMission(Mission a) {
        return missionrepository.save(a);
    }

    @Override
    public Mission updateMission(Mission a) {
        return missionrepository.save((a));    }


    @Override
    public Mission retrieveMission(Long MissionId) {
        return missionrepository.findById(MissionId).orElse(null);    }


    @Override
    public void deleteMission(Long MissionId) {
        missionrepository.deleteById(MissionId);
    }
}
