import React from 'react'
import '../../../src/App.css'
import LoginForm from './LoginForm.js'
import { Grid, Divider, Header, Segment, Message, Image } from 'semantic-ui-react'
import logo from '../../assets/logoPolytech.png'

function Login () {
  const uriParams = {}
  decodeURI(window.location.href).replace(/[?&]+([^=&]+)=([^&]*)/gi, (_, key, value) => {
    uriParams[key] = value
  })

  return (

    <Grid centered textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 350 }}>
        <Divider hidden />
        <Message info>
          <Image src={logo} size='mini' avatar />
          Login with your Polytech account
        </Message>
        <Segment>

          <Header as='h1' textAlign='center'>{uriParams.app_name ? uriParams.app_name : 'Login Page'}</Header>
          <Divider />
          <LoginForm redirect_uri={uriParams.redirect_uri} stateAuth={uriParams.state} client_id={uriParams.client_id} />
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Login
