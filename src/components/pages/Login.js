import React from 'react'
import '../../styles/App.css'
import LoginForm from '../LoginForm.js'
import { Grid, Segment } from 'semantic-ui-react'
import logo from '../../assets/logoMyDash.svg'

const Login = () => {
  return (
    <div className='Login'>

      <Grid centered columns={3} rows={3}>

        <Grid.Column>
          <Segment>
            <img src={logo} class='ui medium image' alt='logo' />
          </Segment>
          <Segment>
            <LoginForm />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Login
