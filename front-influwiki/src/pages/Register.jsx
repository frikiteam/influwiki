import React from "react";
import HeaderNav from "../components/Header/HeaderNav";

import './Register.css'


const Register = () => {
  return (
    <>
    <HeaderNav/>
      <main className="mainregister">
        <div className="divFormulario">
        <center>
            

            <form className="formulario">
                <h1 className="h1register">Formulario de Registro</h1>
                
                <label className="diseño_label1" for="nombre"> Nombres: </label>                
                <input className="diseño_input1" type="text" id="nombre" name="txtNombre" maxlength= "30" size = "30" placeholder="Ingresa aqui tu nombre"/>
                
                <br /><br />

                <label className="diseño_label1" for="apellido"> Apellidos: </label>                
                <input className="diseño_input1" type="text" id="Apellido" name="txtApellido" maxlength= "30" size = "30" placeholder="Ingresa aqui tu apellido"/>
                
                <br /><br />

                <label className="diseño_label1" for="correo"> Correo: </label>
                <input className="diseño_input1" type="email" id="correo" name="txtCorreo" size="40" placeholder="Ingresa aqui tu correo"/>
                
                <br /><br />
                
                <label className="diseño_label1">Genero:</label>
                <label>Masculino:</label><input type="radio" name="genero" value="Masculino"/>
                <label>Femenino:</label><input type="radio" name="genero" value="Femenino"/>
                
                <br /><br />

                <label className="diseño_label1">Perfil:</label>
                <label>Influwiki:</label><input type="radio" name="perfil" value="Influwiki" checked/>
                
                <br /><br />
                
                <label className="diseño_label1">Contenido a compartir:</label>
                <label>Programacion:</label>                
                <input type="checkbox" name="materias" checked/>
                <label>Farandula:</label>
                <input type="checkbox" name="materias"/>
                <label>Otra:</label>
                <input type="checkbox" name="materias"/>
                
                <br /><br />

                <label className="diseño_label1"> Otra: </label>                
                <input className="diseño_input1" type="text" name="txtOtro" min="1" max="120" size="10" placeholder="Cual Otra"/>
                
                <br /><br />

                <label className="diseño_label1"> Descripcion General:</label>
                <textarea className="diseño_input_area" type="text" rows="3" cols="20">                    
                </textarea>
                
                <br /><br />

                <center>
                <button className="boton_formulario1" type="submit" > <a href="editar_redes sociales.html">Agregar redes sociales</a></button>
                </center>
                
                <br /><br />

                <label className="diseño_label1"> <a href="terms_form.html" target="_blank">Acepta terminos y condiciones</a> </label>
                <input type="checkbox" name="Terminos"/>               
                
                <br /><br />

                <center>                
                <div className="botones_formulario">
                <button className="boton_formulario1" type="submit" > Guardar </button>
                <button className="boton_formulario1" type="submit" > <a href="/front-influwiki/src/pages/Login.jsx">Iniciar sesión</a></button>
                </div>
                </center>
            </form>
        </center>
        </div>    
      </main>
    </>
  )
}

export default Register;