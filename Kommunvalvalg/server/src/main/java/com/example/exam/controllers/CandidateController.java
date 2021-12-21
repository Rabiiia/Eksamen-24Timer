package com.example.exam.controllers;

import com.example.exam.models.Candidate;
import com.example.exam.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CandidateController {

    @Autowired
    private CandidateRepository candidates;

    @GetMapping("/candidates")
    public Iterable<Candidate> getCandidates() {

        return candidates.findAll();
    }


    @GetMapping("/candidates/{membership}")
    public List<Candidate> getCandidatesByMembership(@PathVariable String membership) {
        return candidates.getCandidateByMembership(membership);


    }

    @PostMapping("/candidates")
    public Candidate addCandidates(@RequestBody Candidate newCandidate) {

        return candidates.save(newCandidate);
    }


    @PatchMapping("/candidates/{id}")
    public void patchCandidatesById(@PathVariable Long id, @RequestBody Candidate candidateToUpdate) {
        candidates.findById(id).map(foundCandidate -> {
            if (candidateToUpdate.getFirst_name() != null) foundCandidate.setFirst_name(candidateToUpdate.getFirst_name());
            if (candidateToUpdate.getLast_name() != null) foundCandidate.setLast_name(candidateToUpdate.getLast_name());
            if (candidateToUpdate.getMembership() != null) foundCandidate.setMembership(candidateToUpdate.getMembership());

            candidates.save(foundCandidate);
            return "Candidate updated";
        }).orElse("Candidate not found");

    }


    @DeleteMapping("/candidates/{id}")
    public void deleteCandidatesById(@PathVariable Long id) {
        candidates.deleteById(id);
    }


}

