package dev.backend.controller;

import dev.backend.repository.DoctorInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/doctorInfo") // endpoint depends on the user preference
public class DoctorInfoController {

    /**
     * The UserInfoService class to handle the business logic
     */
    @Autowired
    private DoctorInfoService doctorInfoService;

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody Map<String, String> loginInfo) {
        return new ResponseEntity<Boolean>(doctorInfoService.checkLogin(loginInfo.get("username"), loginInfo.get("password")), HttpStatus.CREATED);// send201
    }

    @PostMapping("/register")
    public ResponseEntity<Boolean> signup(@RequestBody Map<String, String> registerInfo) {
        return new ResponseEntity<Boolean>(doctorInfoService.checkRegister(registerInfo.get("username"), registerInfo.get("password")), HttpStatus.CREATED);
    }

//    @PostMapping("/edit_profile")
//    public ResponseEntity<Boolean> editProfile(@RequestBody Map<String, String> editInfo) {
//        return new ResponseEntity<Boolean>(doctorInfoService.editProfile(editInfo.get("originalUsername"), editInfo.get("username"), editInfo.get("password")), HttpStatus.CREATED);
//    }
}