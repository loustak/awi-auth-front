import axiosInstance from '../utils/AxiosInstance'

class AuthenticationService {
  static instance = null

  static getInstance () {
    if (AuthenticationService.instance === null) {
      this.instance = new AuthenticationService()
    }
    return this.instance
  }

  login (email, password) {
    return axiosInstance
      .post(
        '/auth',
        { username: email, password: password },
        {
          validateStatus: function (status) {
            return status >= 200 && status < 300
          }
        }
      )
      .then(response => {
        if (!response.data.authorize_code) {
          return Promise.reject(new Error('auth fail'))
        } else {
          return response.data.authorize_code
        }
      })
  }
}

export default AuthenticationService
