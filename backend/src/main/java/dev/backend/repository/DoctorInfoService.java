package dev.backend.repository;


import dev.backend.model.DoctorInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;


@Service
public class DoctorInfoService {


    @Autowired
    private DoctorInfoRepository doctorInfoRepository;


    public boolean checkLogin(String username, String password) {
        DoctorInfo doctorInfo = doctorInfoRepository.findDoctorInfoByName(username).orElse(null);
        if (doctorInfo == null) {
            return false;
        } else {
            return doctorInfo.getPassword().equals(password);
        }
    }


    public boolean checkRegister(String username, String password) {
        DoctorInfo userInfo = doctorInfoRepository.findDoctorInfoByName(username).orElse(null);
        if (userInfo == null) {
            DoctorInfo newDoctorInfo = new DoctorInfo();
            newDoctorInfo.setName(username);
            newDoctorInfo.setPassword(password);
            doctorInfoRepository.save(newDoctorInfo);
            return true;
        } else {
            return false;
        }
    }

    public boolean editProfile(String originalUsername, String username, String password) {
        DoctorInfo doctorInfo = doctorInfoRepository.findDoctorInfoByName(originalUsername).orElse(null);
        if (doctorInfo == null) {
            return false;
        } else {
            doctorInfo.setName(username);
            doctorInfo.setPassword(password);
            doctorInfoRepository.save(doctorInfo);
            return true;
        }
    }
}