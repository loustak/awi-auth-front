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

  componentDidMount () {
    this.auth
      .getAuthorizeArguments()
      .then(response => {
        this.redirect_uri = response.data.redirect_uri
        this.stateReceived = response.data.state
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <Grid centered textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 300 }}>
          <Image src={logo} size='medium' centered />
          <Divider hidden />
          <LoginForm redirect_uri={this.redirect_uri} stateReceived={this.stateReceived} />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login
