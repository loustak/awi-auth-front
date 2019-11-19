import React from 'react'
import '../../../src/App.css'
import LoginForm from './LoginForm.js'
import { Grid, Divider, Header, Segment, Message, Image, Icon } from 'semantic-ui-react'
import logo from '../../assets/logoPolytech.png'

// MISSING PARAMS IN URL
const requiredParams = ['client_id', 'state', 'redirect_uri']

const MessageMissingParam = (props) => (
  <Message negative>
    <Message.Header>
      <Icon name='warning sign' />
      Warning
    </Message.Header>
    Your login will fail because the url does not contain
    the parameter{props.params.length > 1 && 's'}
    {' ' + props.params.join(', ')}.
  </Message>
)

// GET A COLOR FOR APP NAME
// TO DO : chose nice colors
const availableColors = ['blue', 'red', 'green', 'orange', 'teal']

function getColor (name) {
  const unicodes = name.split('').map(c => c.charCodeAt(0))
  const sumUnicodes = unicodes.reduce((a, b) => a + b, 0)
  const colorIndex = sumUnicodes % availableColors.length
  return availableColors[colorIndex]
}

// MAIN COMPONENT
function Login () {
  const uriParams = {}
  decodeURI(window.location.href).replace(/[?&]+([^=&]+)=([^&]*)/gi, (_, key, value) => {
    uriParams[key] = value
  })

  const missingParams = requiredParams.filter(p => !Object.keys(uriParams).includes(p))

  const color = getColor(uriParams.app_name)

  return (

    <Grid centered textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 350 }}>
        <Divider hidden />
        <Message info>
          <Image src={logo} size='mini' avatar />
          Login with your Polytech account
        </Message>
        <Divider hidden />

        {missingParams.length !== 0 && <MessageMissingParam params={missingParams} />}

        <Segment>
          <Header as='h1' color={color} textAlign='center'>
            {uriParams.app_name ? uriParams.app_name : 'Login Page'}
          </Header>
          <Divider />
          <LoginForm
            redirect_uri={uriParams.redirect_uri}
            stateAuth={uriParams.state}
            client_id={uriParams.client_id}
            buttonColor={color}
          />
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Login
