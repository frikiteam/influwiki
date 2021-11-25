package co.com.frikiteam.influwiki.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.frikiteam.influwiki.models.UsuarioModel;
import co.com.frikiteam.influwiki.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;

	/**
	 * Metodo que lista todos los usuatios de la bd
	 * 
	 * @return
	 */
	public ArrayList<UsuarioModel> listarUsuarios() {
		return (ArrayList<UsuarioModel>) usuarioRepository.findAll();
	}

	/**
	 * Metodo que registra un nuevo usuario
	 * 
	 * @param usuario
	 * @return
	 */
	public UsuarioModel registrarUsuario(UsuarioModel usuario) {
		return usuarioRepository.save(usuario);

	}

	/**
	 * Metodo que busca si existe un uuario por id
	 * @param id
	 * @return
	 */
	public Optional<UsuarioModel>  buscarUsuarioId(Long id) {
		
		return usuarioRepository.findById(id);
	}
	
	/**
	 * Metodo elimina el usuario por su id
	 * @param id
	 * @return
	 */
	public boolean eliminarUsuario(Long id) {
		boolean borrado;
		try {
			usuarioRepository.deleteById(id);
			borrado = true;
			return borrado;
		} catch (Exception e) {
			borrado = false;
			return borrado;

		}
	}

}
