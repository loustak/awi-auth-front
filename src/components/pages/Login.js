import React from 'react'
import '../../styles/App.css'
import LoginForm from '../LoginForm.js'
import { Grid, Image, Divider } from 'semantic-ui-react'
import logo from '../../assets/logoMyDash.svg'
import AuthenticationService from '../../services/AuthenticationService'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.auth = AuthenticationService.getInstance()
  }

  render () {
    const uriParams = {}
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (_, key, value) => {
      uriParams[key] = value
    })

    return (
      <Grid centered textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 300 }}>
          <Image src={logo} size='medium' centered />
          <Divider hidden />
          <LoginForm redirect_uri={uriParams.redirect_uri} stateAuth={uriParams.state} {...this.props} />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login
