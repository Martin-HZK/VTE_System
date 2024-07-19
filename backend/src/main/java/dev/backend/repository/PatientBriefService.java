package dev.backend.repository;

import dev.backend.model.PatientBrief;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientBriefService {

    @Autowired
    private PatientBriefRepository patientBriefRepository;

    public List<PatientBrief> allBriefInfo() {
        return patientBriefRepository.findAll();
    }

    public PatientBrief addPatientBrief(String unicode, String name, String gender, String age, String recent_ex, String rec_time, String url) {
        PatientBrief patientBrief = new PatientBrief(unicode, name, gender, age, rec_time, recent_ex, url);
        patientBriefRepository.save(patientBrief);
        return patientBrief;
    }




}
