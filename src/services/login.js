import axios from "axios"
const baseUrl = '/api/login'



const register = async (newUser) => {
  const response = await axios.post(baseUrl, newUser)
  //No se deben retornar todos los datos de usuario desde el backend
  return response.data
}

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}


export default { register, login}