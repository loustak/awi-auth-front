import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://oauth.igpolytech.fr',
  timeout: 2000,
  responseType: 'json'
})

export default axiosInstance
