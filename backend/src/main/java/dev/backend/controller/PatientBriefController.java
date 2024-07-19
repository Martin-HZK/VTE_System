package dev.backend.controller;


import dev.backend.model.PatientBrief;
import dev.backend.repository.PatientBriefService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/patient_brief")
public class PatientBriefController {
    @Autowired
    private PatientBriefService patientBriefService;

    @GetMapping("/all_patients")
    public ResponseEntity<List<PatientBrief>> getAllPatientBrief() {
        return new ResponseEntity<List<PatientBrief>>(patientBriefService.allBriefInfo(), HttpStatus.OK);
    }

    @PostMapping("add_new_patient")
    public ResponseEntity<PatientBrief> addPatientBrief(
            @RequestParam("unicode") String unicode, @RequestParam("name") String name,
            @RequestParam("gender") String gender, @RequestParam("age") String age,
            @RequestParam("receive_time") String receive_time, @RequestParam("recent_excercise") String recent_excercise,
            @RequestParam("detailed_url") String detailed_url) {

        return new ResponseEntity<PatientBrief>(patientBriefService.addPatientBrief(unicode, name, gender, age, receive_time, recent_excercise, detailed_url), HttpStatus.OK);
    }



}
