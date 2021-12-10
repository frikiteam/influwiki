package co.com.frikiteam.influwiki.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.com.frikiteam.influwiki.models.UsuarioModel;
import co.com.frikiteam.influwiki.services.UsuarioService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET})
@RequestMapping("/login")
public class LoginUsuarioController {
	
	@Autowired
	UsuarioService usuarioService;
	
/**
 * Metodo estatico para enviar y recibir contraseñas 
 * @param correo
 * @param contrasena
 * @return
 */
	
	@GetMapping(path="/{correo}/{contrasena}")
	public UsuarioModel buscarCorreo(@PathVariable String correo, @PathVariable String contrasena){
		UsuarioModel usuarioModel;
		usuarioModel = this.usuarioService.loginUsuario(correo);
		
		if (usuarioModel.getContrasena().equals(contrasena)) {
			
			return usuarioModel;
		} else { 
			UsuarioModel usuarioModelVacio;
			usuarioModelVacio = new UsuarioModel();
			
			return usuarioModelVacio;
		}
	}
	
	
	/**
	 * MEtodo para enviar y recibir contraseñas  con parameros en tipo QueryParams
	 * @param correo
	 * @param contrasena
	 * @return
	 */
	@GetMapping(path="/")
	public UsuarioModel buscarCorreoLogin(@RequestParam String correo, @RequestParam String contrasena){
		UsuarioModel usuarioModel;
		usuarioModel = this.usuarioService.loginUsuario(correo);
		
		if (usuarioModel.getContrasena().equals(contrasena)) {
			return usuarioModel;
			
		} else { 
			UsuarioModel usuarioModelVacio;
			usuarioModelVacio = new UsuarioModel();	
			return usuarioModelVacio;
		}
	}
	


}
