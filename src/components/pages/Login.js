import React from 'react'
import '../../styles/App.css'
import LoginForm from '../LoginForm.js'
import { Grid, Image } from 'semantic-ui-react'
import logo from '../../assets/logoMyDash.svg'

const Login = () => {
  return (
    <Grid centered textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src={logo} size='medium' centered />
        <LoginForm />
      </Grid.Column>
    </Grid>
  )
}

export default Login
