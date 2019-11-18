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
        '/auth',
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
        return response.data.code
      })
  }
}

export default OauthService
