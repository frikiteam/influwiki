package co.com.frikiteam.influwiki.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Login")
public class LoginModel {
	
	@Id
	private String nombreUsuario;
	private String contrasena;
	
	
	
	public LoginModel(String nombreUsuario, String contrasena) {
		super();
		this.nombreUsuario = nombreUsuario;
		this.contrasena = contrasena;
	}
	
	public String getNombreUsuario() {
		return nombreUsuario;
	}
	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	public String getContrasena() {
		return contrasena;
	}
	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	@Override
	public String toString() {
		return "LoginModelo [nombreUsuario=" + nombreUsuario + ", contrasena=" + contrasena + "]";
	}
	
	

}
