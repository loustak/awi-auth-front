import React from 'react'
import { withRouter, useLocation, Redirect } from 'react-router-dom'

import Button from '../../Button/Button'
import { auth } from '../../../services/oauth2Service'
import { AbsoluteRedirect } from '../../../App'

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

function LoginPage (props) {
  const query = useQuery()
  const code = query.get('code')

  console.log('code : ' + code)

  if (code !== undefined && code !== null) {
    auth.code.getToken(props.location.pathname + props.location.search).then(a => {
      console.log({ access_token: a.accessToken, refresh_token: a.refreshToken })
      window.localStorage.setItem('tokens', JSON.stringify({ access_token: a.accessToken, refresh_token: a.refreshToken }))
    }).catch(e => console.log(e))

    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <AbsoluteRedirect to={auth.code.getUri()} />
    )
  }
}

export default withRouter(LoginPage)
