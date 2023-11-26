package tn.esprit.infini.vendredi.controllers;

import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.infini.vendredi.entities.UserAudit;
import tn.esprit.infini.vendredi.services.UserauditService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/UserAudit")
public class UserAuditController {
    UserauditService userauditService;
    @GetMapping("/retrieve-all-Abonnements")
    @PreAuthorize("hasRole('AUDIT')")

    public List<UserAudit> getMissions() {
        List<UserAudit> listUserAudits = userauditService.retrieveAllUserAudits() ;
        return listUserAudits;
    }
    @GetMapping("/retrieve-UserAudit/{UserAudit-id}")
    @PreAuthorize("hasRole('AUDIT')")

    public UserAudit retreiveUserAudit(@PathVariable("UserAudit-id") long UserAuditId) {
        return userauditService.retrieveUserAudit(UserAuditId);
    }
    @PostMapping("/add-UserAudit")
    @PreAuthorize("hasRole('AUDIT')")

    public UserAudit addUserAudit(@RequestBody UserAudit a) {
        UserAudit userAudit = userauditService.addUserAudit(a);
        return userAudit;
    }
    @DeleteMapping("/remove-UserAudit/{UserAudit-id}")
    @PreAuthorize("hasRole('AUDIT')")

    public void removeUserAudit(@PathVariable("UserAudit-id") long UserAuditId) {
        userauditService.deleteUserAudit(UserAuditId);
    }
    @PutMapping("/update-UserAudit")
    @PreAuthorize("hasRole('AUDIT')")

    public UserAudit updateUserAudit(@RequestBody UserAudit a) {
        UserAudit userAudit= userauditService.updateUserAudit(a);
        return userAudit;
    }
}


