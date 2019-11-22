const ClientOAuth2 = require('client-oauth2')

export const auth = new ClientOAuth2({
  clientId: '61976b76-48e7-4d07-98cb-88828f7dcf40',
  clientSecret: 'HzDn7EAvAM7UC7Ts',
  accessTokenUri: 'https://oauth.igpolytech.fr/token',
  authorizationUri: 'https://oauth.igpolytech.fr/authorize',
  redirectUri: 'https://mydash.igpolytech.fr/token',
  state: 'monState',
  body: {
    client_id: '61976b76-48e7-4d07-98cb-88828f7dcf40'
  }
})
