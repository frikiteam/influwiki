import React from "react";

import styled from './login.module.css'
import {Link} from "react-router-dom";
import HeaderNav from "../components/Header/HeaderNav";

const Login = () => {
  return (
    <>
      <HeaderNav/>
      <form>
        <input
          type="text"
          className="form-control"
          name="usuario"
          placeholder="Usuario"
          required
        />
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <button>Iniciar Sesión</button>
      </form>
      <div>
        <Link className="small" to="/password_recovery">¿Olvidé mi Contraseña?</Link>
        <Link className="small" to="/register">¡Crear Cuenta!</Link>
      </div>
    </>
  )
}

export default Login;