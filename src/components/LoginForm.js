import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {
  render () {
    return (
      <Form size='large'>
        <Segment>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
    )
  }
}

export default LoginForm
