import React from 'react'
import { withRouter, useLocation } from 'react-router-dom'
import Button from '../../Button/Button'
import { auth } from '../../../services/oauth2Service'

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

function LoginPage (props) {
  const query = useQuery()
  const code = query.get('code')

  if (code) {
    auth.code.getToken(props.location.pathname + props.location.search).then(a => console.log(a)).catch(e => console.log(e))

    return (
      <div>{code}</div>
    )
  } else {
    return (
      <Button as={'a'} href={auth.code.getUri()}>Login</Button>
    )
  }
}

export default withRouter(LoginPage)
