package co.com.frikiteam.influwiki.models;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usuario")
public class UsuarioModel implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -6900647114194175687L;
	
	@Id
	private long id;
	private LocalDate fecha_registro;
	private String nombres;
	private String apellidos;
	private String genero;
	private String sobre_nombre;
	private String corre_eletronico;
	private String contrasena;
	private String perfil;
	private String descripcion_contenido;
	private String tematica;
	private LocalDate ultima_actualizacion;
	
	
	public UsuarioModel() {
		super();
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public LocalDate getFecha_registro() {
		return fecha_registro;
	}


	public void setFecha_registro(LocalDate fecha_registro) {
		this.fecha_registro = fecha_registro;
	}


	public String getNombres() {
		return nombres;
	}


	public void setNombres(String nombres) {
		this.nombres = nombres;
	}


	public String getApellidos() {
		return apellidos;
	}


	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}


	public String getGenero() {
		return genero;
	}


	public void setGenero(String genero) {
		this.genero = genero;
	}


	public String getSobre_nombre() {
		return sobre_nombre;
	}


	public void setSobre_nombre(String sobre_nombre) {
		this.sobre_nombre = sobre_nombre;
	}


	public String getCorre_eletronico() {
		return corre_eletronico;
	}


	public void setCorre_eletronico(String corre_eletronico) {
		this.corre_eletronico = corre_eletronico;
	}


	public String getContrasena() {
		return contrasena;
	}


	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}


	public String getPerfil() {
		return perfil;
	}


	public void setPerfil(String perfil) {
		this.perfil = perfil;
	}


	public String getDescripcion_contenido() {
		return descripcion_contenido;
	}


	public void setDescripcion_contenido(String descripcion_contenido) {
		this.descripcion_contenido = descripcion_contenido;
	}


	public String getTematica() {
		return tematica;
	}


	public void setTematica(String tematica) {
		this.tematica = tematica;
	}


	public LocalDate getUltima_actualizacion() {
		return ultima_actualizacion;
	}


	public void setUltima_actualizacion(LocalDate ultima_actualizacion) {
		this.ultima_actualizacion = ultima_actualizacion;
	}


	@Override
	public String toString() {
		return "Usuario [id=" + id + ", fecha_registro=" + fecha_registro + ", nombres=" + nombres + ", apellidos="
				+ apellidos + ", genero=" + genero + ", sobre_nombre=" + sobre_nombre + ", corre_eletronico="
				+ corre_eletronico + ", contrasena=" + contrasena + ", perfil=" + perfil + ", descripcion_contenido="
				+ descripcion_contenido + ", tematica=" + tematica + ", ultima_actualizacion=" + ultima_actualizacion
				+ "]";
	}
	
	
	
}
