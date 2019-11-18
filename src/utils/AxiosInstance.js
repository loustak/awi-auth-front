import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://mydash-dev.igpolytech.fr',
  timeout: 2000,
  responseType: 'json'
})

export default axiosInstance
