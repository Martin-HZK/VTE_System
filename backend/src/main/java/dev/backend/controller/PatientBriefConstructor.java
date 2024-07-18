package dev.backend.controller;


import dev.backend.model.PatientBrief;
import dev.backend.repository.PatientBriefService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/patient_brief")
public class PatientBriefConstructor {
    @Autowired
    private PatientBriefService patientBriefService;

    @GetMapping
    public ResponseEntity<List<PatientBrief>> getAllPatientBrief() {
        return new ResponseEntity<List<PatientBrief>>(patientBriefService.allBriefInfo(), HttpStatus.OK);
    }


}
