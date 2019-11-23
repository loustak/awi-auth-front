import React from 'react'
import { withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import { Button, Form, Input, Message, Label, Header, Divider } from 'semantic-ui-react'
import OauthService from '../../services/oauthService'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

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
          console.log(props.redirect_uri)
          window.location.replace(props.redirect_uri + '?code=' + response + '&state=' + props.stateAuth)
        })
        .catch(error => {
          actions.setFieldError('general', 'Username or password is incorrect')
        })
    }}
  >

    {({ handleChange, handleSubmit, values, errors, touched }) => (
      <Form size='large' onSubmit={handleSubmit}>
        <Divider hidden />
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
        <Divider hidden />
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

        <Divider hidden />
        <Button fluid size='large' onClick={handleSubmit} color={props.buttonColor} type='submit'>
          Login
        </Button>

      </Form>
    )}
  </Formik>
)

LoginForm.propTypes = {
  redirect_uri: PropTypes.string,
  stateAuth: PropTypes.string,
  client_id: PropTypes.string,
  buttonColor: PropTypes.string
}

export default withRouter(LoginForm)
