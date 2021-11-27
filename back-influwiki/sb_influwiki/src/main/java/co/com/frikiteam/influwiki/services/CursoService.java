package co.com.frikiteam.influwiki.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.frikiteam.influwiki.models.CursoModel;
import co.com.frikiteam.influwiki.repository.CursoRepository;

@Service
public class CursoService {

	@Autowired
	CursoRepository cursoRepository;

	/**
	 * Metodo que lista todos los cursos de la bd
	 * 
	 * @return
	 */
	public ArrayList<CursoModel> listarCurso() {
		return (ArrayList<CursoModel>) cursoRepository.findAll();
	}

	/**
	 * Metodo que registra un nuevo curso
	 * 
	 * @param curso
	 * @return
	 */
	public CursoModel registrarCurso(CursoModel curso) {
		/**
		 * TODO Crear interface para validar el registro o devolver un json con un tipo
		 * de respuesta OK
		 */
		return cursoRepository.save(curso);

	}

	/**
	 * Metodo que busca si existe un curso por id
	 * @param id_curso
	 * @return
	 */
	public Optional<CursoModel>  buscarCursoId(Long id_curso) {
		
		return cursoRepository.findById(id_curso);
	}
	
	/**
	 * Metodo elimina el curso por su id
	 * @param id_curso
	 * @return
	 */
	public boolean eliminarCurso(Long id_curso) {
		boolean borrado;
		try {
			cursoRepository.deleteById(id_curso);
			borrado = true;
			return borrado;
		} catch (Exception e) {
			borrado = false;
			return borrado;

		}
	}

    public Optional<CursoModel> buscarCursoId(long id_curso) {
        return null;
    }

}
