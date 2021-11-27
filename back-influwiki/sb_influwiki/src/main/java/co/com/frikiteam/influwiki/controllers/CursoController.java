package co.com.frikiteam.influwiki.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.com.frikiteam.influwiki.models.CursoModel;
import co.com.frikiteam.influwiki.services.CursoService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/frikiteam/api/influwiki/v01")
public class CursoController {

	@Autowired
	CursoService cursoService;
	
	/**
	 * Metodo que devuelve una lista de curso
	 * @return
	 */
	@GetMapping("/obtener-curso")
	public ArrayList<CursoModel> obtenerCurso(){
		return cursoService.listarCurso();
	}
	
	/**
	 * Metodo que utiliza el servicio para almacenar el curso enviado
	 * @param curso
	 * @return
	 */
	@PostMapping("/crear-curso")
	public CursoModel guardarCurso(@RequestBody CursoModel curso) {
		return cursoService.registrarCurso(curso);
	}
	
	/**
	 * Metodo que utiliza el servicio para eliminar segun el ID enviado
	 * @param id_curso
	 * @return
	 */
	@DeleteMapping(path = "/eliminar-curso/{id_curso}")
	public String elimininarCurso(@PathVariable("id_curso") long id_curso) {
		boolean borrado = this.cursoService.eliminarCurso(id_curso);
		if (borrado) {
			return "Se eliminó el curso con éxito " + id_curso;
		}else {
			return "No se ha podido eleminiar el curso " + id_curso;
		}		
	}
	
	/**
	 * Metodo que utiliza el servicio para buscar segun el ID enviado
	 * @param id_curso
	 * @return
	 */
	@GetMapping(path = "/obtener-curso/{id_curso}")
	public Optional<CursoModel> obtenerCurso(@PathVariable("id_curso") long id_curso){
		return this.cursoService.buscarCursoId(id_curso);
	}
	
	
}
