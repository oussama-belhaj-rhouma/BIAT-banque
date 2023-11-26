package tn.esprit.infini.vendredi.services;

import tn.esprit.infini.vendredi.entities.Filliale;

import java.util.List;

public interface IFillialeService {
    List<Filliale> retrieveAllFilliales();

    Filliale addFilliale(Filliale a);

    Filliale updateFilliale (Filliale a);

    Filliale retrieveFilliale (Long FillialeId);

    void deleteFilliale( Long FillialeId);


}
