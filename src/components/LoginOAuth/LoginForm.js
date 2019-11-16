import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useFormik } from 'formik'
import { Button, Form, Input } from 'semantic-ui-react'
import OauthService from '../../services/oauthService'

function LoginForm (props) {
  const auth = OauthService.getInstance()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values, props)

      auth
        .login(values.username, values.password)
        .then(function (response) {
          window.location.replace(props.redirect_uri + '?authorization_code=' + response + '&state=' + props.stateAuth)
        })
        .catch(error => {
          console.log(error)
          formik.setFieldValue('password', '')
          error = 'Email and password not matching'
        })
    }
  })

  return (
    <Form size='large' onSubmit={formik.handleSubmit}>

      <Form.Field
        icon='user'
        iconPosition='left'
        control={Input}
        label='Username'
        placeholder='firstname.lastname'
        {...formik.getFieldProps('username')}
      />
      <Form.Field
        icon='lock'
        iconPosition='left'
        control={Input}
        label='Password'
        placeholder='password'
        type='password'
        {...formik.getFieldProps('password')}
      />

      <Button fluid size='large'>
        Login
      </Button>

    </Form>

  )
}

export default withRouter(LoginForm)
