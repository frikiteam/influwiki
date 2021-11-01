package co.com.frikiteam.influwiki.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import co.com.frikiteam.influwiki.models.UsuarioModel;

@Repository
public interface UsuarioRepository extends MongoRepository<UsuarioModel, Long>{

}
