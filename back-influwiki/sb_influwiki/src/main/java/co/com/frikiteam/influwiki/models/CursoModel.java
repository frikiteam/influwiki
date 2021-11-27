package co.com.frikiteam.influwiki.models;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "curso")
public class CursoModel implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -6900647114194175687L;
	
	@Id
	private long id_curso;
	private LocalDate fecha_registro_curso;
	private String nombre_curso;
	private long valor;
	private String descripcion_contenido_curso;
	private String tematica_curso;
	private LocalDate ultima_actualizacion_curso;
	
	
	public CursoModel() {
		super();
	}


	public long getId_curso() {
		return id_curso;
	}


	public void setId_curso(long id_curso) {
		this.id_curso = id_curso;
	}


	public LocalDate getFecha_registro_curso() {
		return fecha_registro_curso;
	}


	public void setFecha_registro_curso(LocalDate fecha_registro_curso) {
		this.fecha_registro_curso = fecha_registro_curso;
	}


	public String getNombre_curso() {
		return nombre_curso;
	}


	public void setNombre_curso(String nombre_curso) {
		this.nombre_curso = nombre_curso;
	}


	
	public Long getValor() {
		return valor;
	}


	public void setValor(Long valor) {
		this.valor = valor;
	}


	public String getDescripcion_contenido_curso() {
		return descripcion_contenido_curso;
	}


	public void setDescripcion_contenido_curso(String descripcion_contenido_curso) {
		this.descripcion_contenido_curso = descripcion_contenido_curso;
	}


	public String getTematica_curso() {
		return tematica_curso;
	}


	public void setTematica_curso(String tematica_curso) {
		this.tematica_curso = tematica_curso;
	}


	public LocalDate getUltima_actualizacion_curso() {
		return ultima_actualizacion_curso;
	}


	public void setUltima_actualizacion_curso(LocalDate ultima_actualizacion_curso) {
		this.ultima_actualizacion_curso = ultima_actualizacion_curso;
	}


	@Override
	public String toString() {
		return "Usuario [id_curso=" + id_curso + ", fecha_registro_curso=" + fecha_registro_curso + ", nombre_curso=" 
				+ nombre_curso +", valor=" + valor + ", descripcion_contenido_curso=" + descripcion_contenido_curso + ", tematica_curso="
				+ tematica_curso + ", ultima_actualizacion_curso=" + ultima_actualizacion_curso
				+ "]";
	}
	
	
	
}
