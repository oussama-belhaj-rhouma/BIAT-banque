package tn.esprit.infini.vendredi.services;
import tn.esprit.infini.vendredi.entities.UserAudit;

import java.util.List;

public interface IUserauuditService {
    List<UserAudit> retrieveAllUserAudits();

    UserAudit addUserAudit(UserAudit a);

    UserAudit updateUserAudit (UserAudit a);

    UserAudit retrieveUserAudit (Long UserAuditId);

    void deleteUserAudit( Long UserAuditId);
}
