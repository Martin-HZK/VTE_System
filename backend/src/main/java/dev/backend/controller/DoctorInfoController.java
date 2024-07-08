package dev.backend.controller;

import 
import dev.backend.repository.DoctorInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

/**
 * The UserInfoController class to handle the user request to log in
 * @author Zhikai Hu
 */
@RestController
@CrossOrigin
@RequestMapping("/api/v1") // endpoint depends on the user preference
public class UserInfoController {

    /**
     * The UserInfoService class to handle the business logic
     */
    @Autowired
    private DoctorInfoService doctorInfoService;

    /**
     * The PostMapping to check if the user can successfully log in
     * @param loginInfo username and password in mapping
     * @return boolean variable to indicate if the user can successfully log in
     */
    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody Map<String, String> loginInfo) {
        return new ResponseEntity<Boolean>(userInfoService.checkLogin(loginInfo.get("username"), loginInfo.get("password")), HttpStatus.CREATED);// send201
    }

    /**
     * The PostMapping to check if the user can successfully sign up
     * @param signUpInfo username, password, and confirmed password in mapping
     * @return boolean variable to indicate if the user can successfully sign up
     */
    @PostMapping("/signup")
    public ResponseEntity<Boolean> signup(@RequestBody Map<String, String> signUpInfo) {
        return new ResponseEntity<Boolean>(userInfoService.checkSignUp(signUpInfo.get("username"), signUpInfo.get("password")), HttpStatus.CREATED);
    }

    /**
     * The PostMapping to check if the user can successfully edit profile
     * @param editInfo original username, new username, and new password in mapping
     * @return boolean variable to indicate if the user can successfully edit profile
     */
    @PostMapping("/edit_profile")
    public ResponseEntity<Boolean> editProfile(@RequestBody Map<String, String> editInfo) {
        return new ResponseEntity<Boolean>(userInfoService.editProfile(editInfo.get("originalUsername"), editInfo.get("username"), editInfo.get("password")), HttpStatus.CREATED);
    }
}