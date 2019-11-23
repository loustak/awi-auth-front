const ClientOAuth2 = require('client-oauth2')
import {
  inProduction,
  inIntegration
} from '../Utils'

const accessTokenUri = 'https://oauth.igpolytech.fr/token'
const authorizationUri = 'https://oauth.igpolytech.fr/authorize'
const redirectUri = 'http://localhost:5000/token'

if (inProduction() || inIntegration()) {
  authorizationUri = REACT_APP_AUTHORIZATION_URI
  redirectUri = REACT_APP_REDIRECT_URI
}

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
