import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://oauth-dev.igpolytech.fr',
  timeout: 2000,
  responseType: 'json'
})

export default axiosInstance
