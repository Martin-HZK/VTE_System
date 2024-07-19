package dev.backend.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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

    private String detail_url;

    public PatientBrief(String unicode, String name, String gender, String receive_time, String recent_excercise, String detail_url) {
        this.unicode = unicode;
        this.name = name;
        this.gender = gender;
        this.receive_time = receive_time;
        this.recent_excercise = recent_excercise;
        this.detail_url = detail_url;
    }
}
