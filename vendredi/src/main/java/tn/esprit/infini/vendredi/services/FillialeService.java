package tn.esprit.infini.vendredi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.infini.vendredi.entities.Filliale;
import tn.esprit.infini.vendredi.repository.Fillialeepository;

import java.util.List;

@Service
public class FillialeService implements  IFillialeService {

    @Autowired
    Fillialeepository fillialeepository;
    @Override
    public java.util.List<Filliale> retrieveAllFilliales() {
        return (List<Filliale>) fillialeepository.findAll();
    }

    @Override
    public Filliale addFilliale(Filliale a) {
        return fillialeepository.save(a);
    }
    @Override
    public Filliale updateFilliale(Filliale a){
        return fillialeepository.save((a));    }

    @Override
    public Filliale retrieveFilliale(Long FillialeId){
        return fillialeepository.findById(FillialeId).orElse(null);    }

    @Override
    public void deleteFilliale(Long FillialeId)  {
        fillialeepository.deleteById(FillialeId);
    }



}