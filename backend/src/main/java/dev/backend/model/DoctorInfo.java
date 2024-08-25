package dev.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "doctorInfo")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorInfo {

    @Id
    private ObjectId id;

    private String name;

    private String password;

    /**
     * The Doctor holds a list of the related patient id
     */
    private List<String> patients;

    /**
     * Each time we initialize a new doctor, we do not have any patients related
     * @param username
     * @param password
     */
    public DoctorInfo(String username, String password) {
        this.name = username;
        this.password = password;
        this.patients = new ArrayList<>();
    }
}
