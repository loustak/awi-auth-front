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
    axiosInstance
      .post(
        '/auth',
        { username: email, password: password },
        {
          validateStatus: function (status) {
            return status >= 200 && status < 300
          }
        }
      )
      .then(function (response) {

        if (!response.data.authorized_code) {
          return Promise.reject(new Error('auth fail'))
        } else {
          return response.data.authorized_code
        }
      })
  }

  isLoggedIn () {
    // TO DO
  }

  logout () {
    // TO DO
  }
}

export default AuthenticationService
