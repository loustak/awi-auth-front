import React from 'react'
import { withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import { Button, Form, Input, Message, Label, Header } from 'semantic-ui-react'
import OauthService from '../../services/oauthService'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .required('Password is required')
})

const auth = OauthService.getInstance()

export const LoginForm = (props) => (

  <Formik
    initialValues={{
      username: '',
      password: ''
    }}
    validationSchema={LoginSchema}
    onSubmit={(values, actions) => {
      auth
        .login(values.username, values.password, props.client_id)
        .then(function (response) {
          window.location.replace(props.redirect_uri + '?code=' + response + '&state=' + props.stateAuth)
        })
        .catch(error => {
          console.log(error)
          actions.setFieldError('general', 'Username and password not matching')
        })
    }}
  >

    {({ handleChange, handleSubmit, values, errors, touched }) => (
      <Form size='large' onSubmit={handleSubmit}>

        <Form.Field>
          <Header as='h3'>Username</Header>
          <Input
            icon='user'
            iconPosition='left'
            placeholder='firstname.lastname'
            value={values.username}
            onChange={handleChange('username')}
          />
          {errors.username && touched.username &&
            <Label basic prompt pointing>
              {errors.username}
            </Label>}

        </Form.Field>

        <Form.Field>
          <Header as='h3'>Password</Header>
          <Input
            icon='lock'
            iconPosition='left'
            placeholder='password'
            type='password'
            value={values.password}
            onChange={handleChange('password')}
          />
          {errors.password && touched.password &&
            <Label basic prompt pointing>
              {errors.password}
            </Label>}
        </Form.Field>

        {errors.general && <Message size='mini' negative>{errors.general}</Message>}

        <Button fluid size='large' onPress={handleSubmit}>
          Login
        </Button>

      </Form>
    )}
  </Formik>

)

export default withRouter(LoginForm)
