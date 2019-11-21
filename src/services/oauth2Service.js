const ClientOAuth2 = require('client-oauth2')

export const auth = new ClientOAuth2({
  clientId: 'o1-g3',
  clientSecret: 'secret-dashboard',
  accessTokenUri: 'https://oauth-dev.igpolytech.fr/token',
  authorizationUri: 'https://oauth-dev.igpolytech.fr/authorize',
  redirectUri: process.env.NODE_ENV === 'https://mydash-dev.igpolytech.fr/token',
  state: 'monState',
  body: {
    client_id: 'o1-g3'
  }
})
