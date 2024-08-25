package dev.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;
import java.util.List;

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

    private String receive_time;

    private String recent_exercise;


    @Getter
    private List<Detail> details;

//    private String detail_url;

    public PatientBrief(String unicode, String name, String gender, String age, String receive_time, String recent_exercise, List<Detail> details) {
        this.unicode = unicode;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.receive_time = receive_time;
        this.recent_exercise = recent_exercise;
        this.details = details;
    }

    public PatientBrief(String unicode, String name, String gender, String age, String receive_time) {
        this.unicode = unicode;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.receive_time = receive_time;
        this.details = new ArrayList<Detail>();
    }

    //    public static class Detail {
//        private String move_type;
//        private String completion;
//        private String score;
//        private String complete_time;
//
//        // Getters and Setters
//
//        public Detail(String move_type, String completion, String score, String complete_time) {
//            this.move_type = move_type;
//            this.completion = completion;
//            this.score = score;
//            this.complete_time = complete_time;
//        }
//    }
}



