import React from "react";
//import axios from "axios";
import UsuarioService from "../../services/UsuarioService";

export default class UsuariosList extends React.Component {

  handleSubmit = async event => {
  console.log(UsuarioService.get('/obtener-usuarios'));

    console.log("data");
      event.preventDefault();
 

      const data = await UsuarioService.get('/obtener-usuarios')
      .then(response => (this.info = response))


        console.log(UsuarioService.get('/obtener-usuarios'));
    }
  render() {
    return <div>hola</div>;
  }
}
