package dev.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Document(collection = "PatientBrief")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientBrief {
    @Id
    private ObjectId id;

    private String unicode;

    private String name;

    private String gender;

    private String age;

    private String recent_excercise;

    private String receive_time;

    private List<Detail> details;

    // Getters and Setters

    public static class Detail {
        private String move_type;
        private String completion;
        private String score;
        private String complete_time;

        // Getters and Setters

    }

//    private String detail_url;
//
    public PatientBrief(String unicode, String name, String gender, String age, String receive_time, String recent_excercise, List<Detail> detials) {
        this.unicode = unicode;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.receive_time = receive_time;
        this.recent_excercise = recent_excercise;
        this.details = detials;
    }
}
