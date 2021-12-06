import React from "react";

import './Login.css'


const Login = () => {
  return (
    <>


    <div className="container">
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-none d-lg-block bg-login-image">
                            <img className="logoBuho" src="../img/infliwiki_buho.png" alt="otra" ></img>
                        </div>
                        <div className="col-12 col-lg-6 cont__form">
                            <div className="p-5">
                                <div className="text-center">
                                    <a href="../index.html" title="ir a la pagina principal "target="_blank"> 
                                        <img src="../img/Influwiki_letras.png" alt="otra" ></img>
                                    </a>
                                </div>
                                <br />
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="usuario" name="usuario" placeholder="Usuario" required=""/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Contraseña" required=""/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">visualizar Contraseña</label>
                                    </div>
                                    <div className="col-sm-12">                
                                        <button className="btn brColor btn-user btn-block" style={{color: "#ffffff"}} type="submit"><a href = "editar_perfil.html">Iniciar Sesión</a></button>
                                        <input type="hidden" name="valLogin" id="valLogin" value=""/>
                                    </div>
                                </form>
                                <div className="text-center d-flex justify-content-between">
                                    <a className="small" href="Password_recovery_form.html">Olvidé mi Contraseña?</a>                  
                                    <a className="small" href="user_form.html">Crear Cuenta!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


</>
  )
}

export default Login;