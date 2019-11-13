import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import axiosInstance from '../utils/API'

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
  }

  handleEmailChange (event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
  }

  handleSubmitLogin (event) {
    const payload = {
      email: this.state.email,
      password: this.state.password
    }

    const self = this

    axiosInstance
      .post(
        '/oauth2/auth',
        { payload },
      )
      .then(function (response) {
        if (response.data.code === 200) {
          self.setState({ messageError: '' })
        }
        else if (response.data.code === 204) {
          self.setState({ messageError: 'Email and password do not match' })
        }
        else if (response.data.code === 400) {
          self.setState({ messageError: 'Email and password are required' })
        }
      })
      .catch(function (error) {
        console.log(error)
      })

    event.preventDefault()
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
          </Message>
        }

        <Button color='teal' fluid size='large' disabled={!isEnabled}>
        Login
        </Button>
      </Form>
    )
  }
}

export default LoginForm
