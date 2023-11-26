package tn.esprit.infini.vendredi.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Mission implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long missionId;
    private Date dateDebut;
    private Date dateFin;
    private String userAuditId;

    @ManyToOne
    @JoinColumn(name = "filliale_id")
    private Filliale filliale;

    @ManyToMany
    @JoinTable(name = "mission_user_audit",
            joinColumns = @JoinColumn(name = "mission_id"),
            inverseJoinColumns = @JoinColumn(name = "user_audit_id"))
    private List<UserAudit> userAudits;
    @OneToOne(mappedBy = "mission")
    private Rapport rapport;


}
