package tn.esprit.infini.vendredi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.infini.vendredi.entities.UserAudit;
import tn.esprit.infini.vendredi.repository.Userauditrepository;

import java.util.List;
@Service
public class UserauditService implements IUserauuditService{
    @Autowired
    Userauditrepository userauditrepository;
    @Override
    public List<UserAudit> retrieveAllUserAudits() {
        return (List<UserAudit>)  userauditrepository.findAll();    }

    @Override
    public UserAudit addUserAudit(UserAudit a) {
        return userauditrepository.save(a);
    }

    @Override
    public UserAudit updateUserAudit(UserAudit a) {
        return userauditrepository.save((a));    }

    @Override
    public UserAudit retrieveUserAudit(Long UserAuditId) {
        return userauditrepository.findById(UserAuditId).orElse(null);    }

    @Override
    public void deleteUserAudit(Long UserAuditId) {
        userauditrepository.deleteById(UserAuditId);
    }
}







