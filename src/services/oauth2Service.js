const ClientOAuth2 = require('client-oauth2')

export const auth = new ClientOAuth2({
  clientId: 'o1-g3',
  clientSecret: 'secret-dashboard',
  accessTokenUri: 'http://oauth-dev.igpolytech.fr/token',
  authorizationUri: 'http://oauth-dev.igpolytech.fr/authorize',
  redirectUri: 'http://localhost:3000/connexion',
  state: 'monState',
  body: {
    client_id: 'o1-g3'
  }
})
