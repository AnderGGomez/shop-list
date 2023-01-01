import axios from "axios"
const baseUrl = '/api/inventory'



const getInventory = async (token) => {
  const config = {
    headers : { Authorization : `bearer ${token}` },
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const addProduct = async (productObj, inventoryId, token) => {
  const config = {
    headers: { Authorization : `bearer ${token}`},
  }
  const response = await axios.post(`${baseUrl}/${inventoryId}/products`, productObj, config)
  return response.data
}

const updateInfoProduct = async (productObj, inventoryId, token) => {
  const config = {
    headers: { Authorization : `beater ${token}`},
  }
  const response = await axios.put(`${baseUrl}/${inventoryId}/info-product`, productObj, config)
  return response.data
}
const updateInventory = async (products, inventoryId, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}`},
  }
  const response = await axios.put(`${baseUrl}/${inventoryId}/products`, products, config)
  return response.data
}


export default { getInventory, addProduct, updateInventory, updateInfoProduct }