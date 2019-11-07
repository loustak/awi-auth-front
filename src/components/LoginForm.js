import React from 'react'
import { Button, Form} from 'semantic-ui-react'

class LoginForm extends React.Component {

  render () {
    return (

      <Form size="large">
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Email address"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
        />
        <Button color="blue" fluid size="large">
          Login
        </Button>
      </Form>
    )
  }
}

export default LoginForm
