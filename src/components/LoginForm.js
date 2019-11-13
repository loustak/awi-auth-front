import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import axiosInstance from '../utils/API'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errors: {}
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

    axiosInstance
      .post(
        'login',
        { payload },
        { withCredentials: true }
      )
      .then(function (response) {
        console.log(response)
        if (response.data.code === 200) {
          console.log('Login successfull')
        } else if (response.data.code === 204) {
          console.log('Username password do not match')
        } else {
          console.log('Username does not exists')
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

        <Button color='teal' fluid size='large' disabled={!isEnabled}>
        Login
        </Button>
      </Form>
    )
  }
}

export default LoginForm
