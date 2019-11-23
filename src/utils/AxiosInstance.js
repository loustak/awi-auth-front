import axios from 'axios'
import {
  inProduction,
  inIntegration
} from '../Utils'

console.log(`App started in ${process.env.REACT_APP_ENV}`)

let url = 'https://oauth.igpolytech.fr'

if (inProduction() || inIntegration()) {
  url = REACT_APP_SERVER_URL
}

const axiosInstance = axios.create({
  baseURL: url,
  timeout: 2000,
  responseType: 'json'
})

export default axiosInstance
