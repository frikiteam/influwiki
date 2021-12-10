package co.com.frikiteam.influwiki.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import co.com.frikiteam.influwiki.models.LoginModel;

@Repository
public interface LoginRepository extends MongoRepository<LoginModel, Long>{


}
