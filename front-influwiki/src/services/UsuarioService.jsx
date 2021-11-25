import axios from "axios";


/**
 * Se encarga de hacer la petción get al ervidor
 * para traer los usuario influwiki
 * @returns 
 */
/** 
 export async function GetUsuarios() {
     try {
         const reponse = await axios({
             url: `${baseUrl}/obtener-usuarios`,
             method: "GET",
            });
            
            return reponse;
        } catch (error) {
            console.log("errorback obtener datos" + ":" + error);
        }
    }
    
    export default GetUsuarios;
    */
   
   export default axios.create({
       
        baseUrl : `http:localhost:8080/frikiteam/api/influwiki/v01`
});