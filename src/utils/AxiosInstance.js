import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://oauth.igpolytech.fr/oauth',
  timeout: 2000,
  responseType: 'json'
})

export default axiosInstance
