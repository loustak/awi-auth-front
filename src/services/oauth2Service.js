const ClientOAuth2 = require('client-oauth2')

const accessTokenUri = process.env.REACT_APP_SERVER_URL + '/token'
const authorizationUri = process.env.REACT_APP_SERVER_URL + '/authorize'
const redirectUri = window.location.origin + '/token'

export const auth = new ClientOAuth2({
  clientId: '61976b76-48e7-4d07-98cb-88828f7dcf40',
  clientSecret: 'HzDn7EAvAM7UC7Ts',
  accessTokenUri: accessTokenUri,
  authorizationUri: authorizationUri,
  redirectUri: redirectUri,
  state: 'monState',
  body: {
    client_id: '61976b76-48e7-4d07-98cb-88828f7dcf40'
  }
})
