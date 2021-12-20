package com.example.exam.repositories;

import com.example.exam.models.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CandidateRepository extends JpaRepository <Candidate, Long> {

    List<Candidate> getCandidateByMembership(@Param("membership") String membership);




}
