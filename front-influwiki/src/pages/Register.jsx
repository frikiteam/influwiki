import React, {useState} from "react";
import HeaderNav from "../components/Header/HeaderNav";
import styled from "./register.module.css";
import {Link} from "react-router-dom";

const Register = () => {
  let [showSocial, setShowSocial] = useState(false)
  let [showOther, setShowOther] = useState(false)

  const onClickOther = event => {
    setShowOther(lastState => !lastState)
  }

  return (
    <>
      <HeaderNav/>
      <main className={styled.mainregister}>
        <form className={styled.formulario}>
          <h1 className={styled.h1register}>Formulario de Registro</h1>

          <label className={styled.diseño_label}>
            Nombres:
            <input
              className={styled.diseño_input}
              type="text"
              name="txtNombre"
              placeholder="Ingresa aqui tu nombre"
            />
          </label>

          <label className={styled.diseño_label}>
            Apellidos:
            <input
              className={styled.diseño_input}
              type="text"
              name="txtApellido"
              placeholder="Ingresa aqui tu apellido"
            />
          </label>

          <label className={styled.diseño_label}>
            Correo:
            <input
              className={styled.diseño_input}
              type="email"
              name="txtCorreo"
              placeholder="Ingresa aqui tu correo"
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
              />
            </label>
            <label>
              Femenino:
              <input
                type="radio"
                name="genero"
                value="Femenino"
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
                checked
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
                checked
              />
            </label>
            <label>
              Farandula:
              <input
                type="radio"
                value="Farandula"
                name="materias"
              />
            </label>
            <label>
              Otra:
              <input
                type="radio"
                name="materias"
                value="Otra"
                onClick={onClickOther}
              />
              {showOther
                &&
                <input
                  className={styled.diseño_input}
                  type="text"
                  name="materias"
                  placeholder="Ingrese otra categoría"
                />
              }
            </label>
          </div>

          <label className={styled.diseño_label}>
            Descripcion General:
            <textarea
              className={styled.diseño_input_area}
              type="text"
            />
          </label>

          <label className={styled.diseño_label}>
            <Link
              className={styled.termsConditions}
              to={'/terms'} target="_blank"
            >
              Acepta terminos y condiciones
            </Link>
            <input type="checkbox" name="Terminos"/>
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