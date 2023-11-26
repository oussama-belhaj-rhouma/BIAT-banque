package tn.esprit.infini.vendredi.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class Filliale implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private EFilliale name;

    @OneToMany(mappedBy = "filliale")
    private List<Mission> missions;

    // Getters and setters
}