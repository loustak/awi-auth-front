import axiosInstance from '../utils/AxiosInstance'

class OauthService {
  static instance = null

  static getInstance () {
    if (OauthService.instance === null) {
      this.instance = new OauthService()
    }
    return this.instance
  }

  login (email, password) {
    return axiosInstance
      .post(
        '/oauth/auth',
        {
          username: email,
          password: password
        },
        {
          validateStatus: function (status) {
            return status >= 200 && status < 300
          }
        }
      )
      .then(response => {
        console.log(response)
        if (!response.data.authorize_code) {
          return Promise.reject(new Error('auth fail'))
        } else {
          return response.data.authorization_code
        }
      })
  }
}

export default OauthService
