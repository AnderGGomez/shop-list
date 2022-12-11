import axios from "axios"

const baseUrl = 'http://localhost:3001/products'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (productObj) => {
  const response = await axios.post(baseUrl, productObj)
  return response.data
}


export default { getAll, create }