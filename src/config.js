const dirtyProtocol = window.location.protocol
const protocol = dirtyProtocol.substring(0, dirtyProtocol.length - 1)

const url = process.env.NODE_ENV === 'development'
  ? 'localhost:5000' : 'poly-recrute.igpolytech.fr/api'

const Config = {
  API_URL: protocol + '://' + url
}

export default Config
