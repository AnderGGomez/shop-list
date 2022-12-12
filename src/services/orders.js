import axios from "axios"

const baseUrl = 'http://localhost:3001/orders'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getOrderUser = async (userId) => {
  const response = await axios.get(`${baseUrl}/?user=${userId}`)
  console.log(response.data)
  if(response.data.length === 0){
    return null
  }else{
    return response.data.pop()
  }
  
}
const create = async (orderObj) => {
  const response = await axios.post(baseUrl, orderObj)
  return response.data
}


export default { getAll, create, getOrderUser }
