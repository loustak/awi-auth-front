import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/oauth2',
  timeout: 2000,
  responseType: 'json'
})

export default axiosInstance
