package dev.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctorInfo")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorInfo {

    @Id
    private ObjectId id;

    private String name;

    private String password;

    public DoctorInfo(String username, String password) {
        this.name = username;
        this.password = password;
    }
}
