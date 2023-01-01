import axios from 'axios'
const baseUrl = '/api/order'

const getLatestOrder = async (token) => {
  const config = {
    headers : {
      Authorization : `bearer ${token}`
    }
  }

  const response = await axios.get(baseUrl, config)
  return response.data
}


export default {getLatestOrder}