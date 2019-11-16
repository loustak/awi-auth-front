import React from 'react'
import '../../styles/App.css'
import LoginForm from '../LoginForm.js'
import { Grid, Image, Divider } from 'semantic-ui-react'
import logo from '../../assets/logoMyDash.svg'

const Login = () => {
  return (
    <Grid centered textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 300 }}>
        <Image src={logo} size='medium' centered />
        <Divider hidden />
        <LoginForm />
      </Grid.Column>
    </Grid>
  )
}

export default Login
