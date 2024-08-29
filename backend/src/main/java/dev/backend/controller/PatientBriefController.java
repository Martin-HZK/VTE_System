package dev.backend.controller;


import dev.backend.model.Detail;
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

    @GetMapping("/patients_by_doctor")
    public ResponseEntity<List<PatientBrief>> getPatientBriefByDoctor(@RequestParam("doctor_name") String name) {
        return new ResponseEntity<>(patientBriefService.allCorrespondingBriefInfoByDoctorID(name), HttpStatus.OK);
    }

    @PostMapping("/add_new_patient")
    public ResponseEntity<PatientBrief> addPatientBrief(
            @RequestParam("unicode") String unicode, @RequestParam("name") String name,
            @RequestParam("gender") String gender, @RequestParam("age") String age,
            @RequestParam("recieve_time") String recieve_time
            ) {

        return new ResponseEntity<PatientBrief>(patientBriefService.addPatientBrief(unicode, name, gender, age, recieve_time), HttpStatus.OK);
    }

    @GetMapping("/details/get_ex_record")
    public ResponseEntity<List<Detail>> getPatientBriefById(@RequestParam("unicode") String unicode) {
        return new ResponseEntity<List<Detail>>(patientBriefService.allSpecificExRecord(unicode), HttpStatus.OK);
    }


}
