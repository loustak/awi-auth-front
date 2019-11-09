import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class LoginForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange (event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
  }

  render () {
    const isEnabled = this.state.email.length > 0 && this.state.password.length > 0

    return (
      <Form size='large'>
        <Form.Input
          fluid
          icon='user'
          iconPosition='left'
          placeholder='E-mail address'
          onChange={this.handleEmailChange.bind(this)}
        />

        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
          onChange={this.handlePasswordChange.bind(this)}
        />

        <Button color='teal' fluid size='large' disabled={!isEnabled}>
          Login
        </Button>
      </Form>
    )
  }
}

export default LoginForm
