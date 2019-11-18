import axios from 'axios'
import * as process from 'prop-types'

const axiosInstance = axios.create({
  //baseURL: process.env.SERVER_URL, BUG 
  timeout: 2000,
  responseType: 'json'
})

export default axiosInstance
