import axiosInstance from '../utils/AxiosInstance'

class OauthService {
  static instance = null

  static getInstance () {
    if (OauthService.instance === null) {
      this.instance = new OauthService()
    }
    return this.instance
  }

  login (email, password, client_id) {
    return axiosInstance
      .post(
        '/oauth/auth',
        {
          username: email,
          password: password,
          client_id: client_id
        },
        {
          validateStatus: function (status) {
            return status >= 200 && status < 300
          }
        }
      )
      .then(response => {
        console.log(response)
        return response.data.authorization_code
      })
  }
}

export default OauthService
