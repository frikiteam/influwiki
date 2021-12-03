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

import co.com.frikiteam.influwiki.models.UsuarioModel;
import co.com.frikiteam.influwiki.services.UsuarioService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/frikiteam/api/influwiki/v01")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	
	/**
	 * Metodo que devuelve una lista de usuarios
	 * @return
	 */
	@GetMapping("/obtener-usuarios")
	public ArrayList<UsuarioModel> obtenerUsuarios(){
		return usuarioService.listarUsuarios();
	}
	
	/**
	 * Metodo que utiliza el servicio para almacenar el usuario enviado
	 * @param usuario
	 * @return
	 */
	@PostMapping("/crear-usuario")
	public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario) {
		return usuarioService.registrarUsuario(usuario);
	}
	
	/**
	 * Metodo que utiliza el servicio para eliminar segun el ID enviado
	 * @param id
	 * @return
	 */
	@DeleteMapping(path = "/eliminar-usuario/{id}")
	public String elimininarUsuario(@PathVariable("id") long id) {
		boolean borrado = this.usuarioService.eliminarUsuario(id);
		if (borrado) {
			return "Se eliminó el usario con éxito " + id;
		}else {
			return "No se ha podido eleminiar el usuario " + id;
		}		
	}
	
	/**
	 * Metodo que utiliza el servicio para buscar segun el ID enviado
	 * @param id
	 * @return
	 */
	@GetMapping(path = "/obtener-usuarios/{id}")
	public Optional<UsuarioModel> obtenerUsario(@PathVariable("id") long id){
		return this.usuarioService.buscarUsuarioId(id);
	}
	
	
}
