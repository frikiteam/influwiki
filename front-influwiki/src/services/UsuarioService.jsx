import axios from "axios";

const BASE_URL = 'http://localhost:8080/frikiteam/api/influwiki/v01'
// const POST_USER_URL = '/crear-usuario'
const GET_USERS_URL = '/obtener-usuarios/'
/**
 * Se encarga de hacer la petción get al servidor
 * para traer los usuario Influwiki
 * @returns 
 */

const UsuarioService = {
  'getUsers': async (setUsers) => {
    let response = await axios(BASE_URL + GET_USERS_URL)

    setUsers(response.data)
  },
  'getUser': async (id, setUser) => {
    let response = await axios(BASE_URL + GET_USERS_URL + id)

    setUser(response.data)
  }
}

export default UsuarioService