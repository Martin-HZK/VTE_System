package dev.backend.repository;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import dev.backend.model.DoctorInfo;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface DoctorInfoRepository extends MongoRepository<DoctorInfo, ObjectId> {


    Optional<DoctorInfo> findDoctorInfoByName(String name);
}
