import React from 'react'
import '../../styles/App.css'
import LoginForm from './LoginForm.js'
import { Grid, Divider, Header } from 'semantic-ui-react'

function Login () {
  const uriParams = {}
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (_, key, value) => {
    uriParams[key] = value
  })

  return (
    <Grid centered textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 300 }}>
        <Divider hidden />
        <Header as='h1' textAlign='center'>App Name</Header>
        <Divider />
        <LoginForm redirect_uri={uriParams.redirect_uri} stateAuth={uriParams.state} />
      </Grid.Column>
    </Grid>
  )
}

export default Login
