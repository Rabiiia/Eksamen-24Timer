package com.example.exam.models;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="candidates")
public class Candidate {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column
    private String first_name;

    @Column
    private String last_name;

    @Column
    private String membership;


}
