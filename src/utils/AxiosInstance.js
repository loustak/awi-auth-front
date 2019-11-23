import axios from 'axios'
import {
  inLocalDev,
  inTest
} from '../Utils'

console.log(`App started in ${process.env.REACT_APP_ENV}`)

let url = process.env.REACT_APP_SERVER_URL
if (inLocalDev() || inTest()) {
  url = 'https://oauth.igpolytech.fr'
}

const axiosInstance = axios.create({
  baseURL: url,
  timeout: 2000,
  responseType: 'json'
})

export default axiosInstance
