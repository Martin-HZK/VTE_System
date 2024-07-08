package dev.backend.repository;


import dev.backend.model.DoctorInfo;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface DoctorInfoRepository extends MongoRepository<DoctorInfo, ObjectId> {

    Optional<DoctorInfo> findDoctorInfoByName(String name);
}
