package tn.esprit.infini.vendredi.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Rapport implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long RapportId;
    private String nomAgent;
    private String Localisation;
    private Long MissionId;
    private Long annee;
    private ERapport type;
    private String fileName;
    @Lob
    private byte[] data;
    @OneToOne
    @JsonIgnore
    private Mission mission;

}