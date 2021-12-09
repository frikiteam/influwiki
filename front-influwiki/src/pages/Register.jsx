import React, {useState} from "react";
import HeaderNav from "../components/Header/HeaderNav";
import styled from "./register.module.css";
import {Link} from "react-router-dom";

const Register = () => {
  let [dataForm, setDataForm] = useState({
    'nombres': '',
    'apellidos': '',
    'correo': '',
    'genero': '',
    'perfil': 'Influwiki',
    'materias': 'Programación',
    'descripcion': '',
    'terminos': false,
  })

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleChange = event => {

    let {name, value, type, checked} = event.target

    setDataForm(lastValue => ({
      ...lastValue,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <>
      <HeaderNav/>
      <main className={styled.mainregister}>
        <form className={styled.formulario} onSubmit={handleSubmit}>
          <h1 className={styled.h1register}>Formulario de Registro</h1>

          <label className={styled.diseño_label}>
            Nombres:
            <input
              className={styled.diseño_input}
              type="text"
              name="nombres"
              placeholder="Ingresa aqui tu nombre"
              onChange={handleChange}
              value={dataForm.nombres}
            />
          </label>

          <label className={styled.diseño_label}>
            Apellidos:
            <input
              className={styled.diseño_input}
              type="text"
              name="apellidos"
              placeholder="Ingresa aqui tu apellido"
              onChange={handleChange}
              value={dataForm.apellidos}
            />
          </label>

          <label className={styled.diseño_label}>
            Correo:
            <input
              className={styled.diseño_input}
              type="email"
              name="correo"
              placeholder="Ingresa aqui tu correo"
              onChange={handleChange}
              value={dataForm.correo}
            />
          </label>

          <div className={styled.labelsGroup}>
            Genero:
            <label>
              Masculino:
              <input
                type="radio"
                name="genero"
                value="Masculino"
                checked={dataForm.genero === 'Masculino'}
                onChange={handleChange}
              />
            </label>
            <label>
              Femenino:
              <input
                type="radio"
                name="genero"
                value="Femenino"
                checked={dataForm.genero === 'Femenino'}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className={styled.labelsGroup}>
            Perfil:
            <label>
              Influwiki:
              <input
                type="radio"
                name="perfil"
                value="Influwiki"
                checked={dataForm.perfil === 'Influwiki'}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className={styled.labelsGroup}>
            Contenido a compartir:
            <label>
              Programación:
              <input
                type="radio"
                name="materias"
                value="Programación"
                checked={dataForm.materias === 'Programación'}
                onChange={handleChange}
              />
            </label>
            <label>
              Farandula:
              <input
                type="radio"
                value="Farandula"
                name="materias"
                checked={dataForm.materias === 'Farandula'}
                onChange={handleChange}
              />
            </label>
            <label>
              Otra:
              <input
                className={styled.diseño_input}
                type="text"
                name="materias"
                placeholder="Ingrese otra categoría"
                onChange={handleChange}
              />
            </label>
          </div>

          <label className={styled.diseño_label}>
            Descripcion General:
            <textarea
              className={styled.diseño_input_area}
              name="descripcion"
              value={dataForm.descripcion}
              onChange={handleChange}
            />
          </label>

          <label className={styled.diseño_label}>
            <Link
              className={styled.termsConditions}
              to={'/terms'} target="_blank"
            >
              Acepta terminos y condiciones
            </Link>
            <input
              type="checkbox"
              name="terminos"
              checked={dataForm.terminos}
              onChange={handleChange}
            />
          </label>

          <div className={styled.buttonsForm}>
            <button className={styled.boton_formulario}> Guardar </button>
            <Link to={'/login'} className={styled.boton_formulario} >Iniciar Sesión</Link>
          </div>
        </form>
      </main>
    </>
  )
}

export default Register;
