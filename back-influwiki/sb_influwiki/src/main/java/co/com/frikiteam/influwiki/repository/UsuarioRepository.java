package co.com.frikiteam.influwiki.repository;




import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import co.com.frikiteam.influwiki.models.UsuarioModel;

@Repository
public interface UsuarioRepository extends MongoRepository<UsuarioModel, Long>{
	
	//Tambien realizar las consultas logicas:
   /**
    * El ?0 marcador de posición le permite sustituir el valor de los argumentos 
    * del método en la cadena de consulta JSON.
    * @param correo_electronico
    * @return
    */
	@Query("{correo_electronico:'?0'}") 
    UsuarioModel buscarCorreo(String correo_electronico);
    
}
