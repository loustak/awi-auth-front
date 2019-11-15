import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import AuthenticationService from '../services/AuthenticationService'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      messageError: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this)

    this.auth = AuthenticationService.getInstance()
  }

  handleEmailChange (event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
  }

  handleSubmitLogin (event) {
    event.preventDefault()

    const redirectUri = this.props.redirect_uri
    const state = this.props.stateAuth

    this.auth
      .login(this.state.email, this.state.password)
      .then(function (response) {
        this.setState({ messageError: '' })
        this.props.history.replace(redirectUri + '?authorization_code=' + response + '&state=' + state)
      })
      .catch(error => {
        console.log(error)

        // Display Error Message Component
        if (error === 'auth fail') {
          this.setState({
            password: '',
            messageError: 'Email and password not matching'
          })
        }
      })
  }

  render () {
    const isEnabled = this.state.email.length > 0 && this.state.password.length > 0

    return (
      <Form size='large' onSubmit={this.handleSubmitLogin}>
        <Form.Input
          fluid
          icon='user'
          iconPosition='left'
          placeholder='E-mail address'
          onChange={this.handleEmailChange}
        />

        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
          onChange={this.handlePasswordChange}
        />

        {this.state.messageError !== '' &&
          <Message negative size='mini'>
            <Message.Content>{this.state.messageError}</Message.Content>
          </Message>}

        <Button color='teal' fluid size='large' disabled={!isEnabled}>
          Login
        </Button>
      </Form>
    )
  }
}

export default LoginForm
