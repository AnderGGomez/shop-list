import axios from "axios"
const baseUrl = 'http://localhost:3001/users'



const register = async (newUser) => {
  const response = await axios.post(baseUrl, newUser)
  //No se deben retornar todos los datos de usuario desde el backend
  return response.data
}

const login = async (credentials) => {
  //GET /posts?title=json-server&author=typicode
  const response = await axios.get(`${baseUrl}/?username=${credentials.username}&password=${credentials.password}`)
  //La validacion del registro se realiza en el backend
  if(response.data.length === 0){
    return null
  }else{
    return response.data.pop()
  }
  

}


export default { register, login}