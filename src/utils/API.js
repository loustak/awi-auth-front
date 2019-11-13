import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://mydash.igpolytech.fr/api/',
  timeout: 2000,
  responseType: 'json'
})

export default axiosInstance
