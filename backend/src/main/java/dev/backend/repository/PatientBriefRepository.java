package dev.backend.repository;

import dev.backend.model.PatientBrief;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import dev.backend.model.PatientBrief;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PatientBriefRepository extends MongoRepository<PatientBrief, ObjectId> {

}
