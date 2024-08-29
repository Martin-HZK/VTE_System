package dev.backend.repository;

import dev.backend.model.Detail;
import dev.backend.model.DoctorInfo;
import dev.backend.model.PatientBrief;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientBriefService {

    @Autowired
    private PatientBriefRepository patientBriefRepository;

    @Autowired
    private DoctorInfoRepository doctorInfoRepository;

    public List<PatientBrief> allBriefInfo() {
        return patientBriefRepository.findAll();
    }

    public List<PatientBrief> allCorrespondingBriefInfoByDoctorID(String name) {
        List<String> patientList = doctorInfoRepository.findDoctorInfoByName(name).get().getPatients();
        List<PatientBrief> patientBriefList = new ArrayList<>();


        for (String patientUnicode : patientList) {
            // 根据 patientUnicode 在 patientBriefRepository 中查找对应的 PatientBrief
            patientBriefRepository.findByUnicode(patientUnicode).ifPresent(patientBriefList::add);
        }

        return patientBriefList;

    }

    public List<Detail> allSpecificExRecord(String unicode) {
        return patientBriefRepository.findByUnicode(unicode).get().getDetails();
    }

    public PatientBrief addPatientBrief(String unicode, String name, String gender, String age, String rec_time) {
//        List<Detail> blank_details = new ArrayList<Detail>();
//        String recent_ex = "default";
//        PatientBrief patientBrief = new PatientBrief(unicode, name, gender, age, rec_time, recent_ex, blank_details);
        PatientBrief patientBrief = new PatientBrief(unicode, name, gender, age, rec_time);
        patientBriefRepository.save(patientBrief);
        return patientBrief;
    }





}
