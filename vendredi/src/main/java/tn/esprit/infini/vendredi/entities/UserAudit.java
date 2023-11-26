package tn.esprit.infini.vendredi.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
@Entity
@Table( name = "UserAudit")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserAudit  implements Serializable {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserAuditId")
    @Id
    private int UserAuditId;
    private String nom;
    private String prenom;
    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Mission> missions;


}
