import React from 'react'
import '../../styles/App.css'
import LoginForm from '../LoginForm.js'
import { Grid, Header, Message, Segment } from 'semantic-ui-react'
import logo from '../../assets/logoMyDash.svg'

const Login = () => {
  return (
    <div className='Login'>

      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            <img src={logo} className='App-logo' alt='logo'/>
          </Header>
          <Segment>
            <LoginForm/>
          </Segment>
          <Message>
            Not registered yet? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Login