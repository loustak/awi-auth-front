import React, { useState } from 'react'
import styles from './LoginForm.module.css'
import Form from 'react-bootstrap/Form'
import Button from '../../Button/Button'
import { NavLink, withRouter } from 'react-router-dom'
import { useFormik } from 'formik'
import Config from '../../../config'
import axios from 'axios'
import { Alert } from 'react-bootstrap'

function LoginForm (props) {

  //-----------------------------VARIABLES-------------------------------------

  const [error, setError] = useState(null)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      axios.post(Config.API_URL + '/connexion', {
        email: values.email,
        password: values.password
      }).then(res => {
        props.history.push('/')
      }).catch(err => {
        setError(err.response.data.error)
      })
    }
  })

  //-----------------------------RETURN-------------------------------------

  return (
    <Form className={styles.loginForm} onSubmit={formik.handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Email'
          {...formik.getFieldProps('email')}
          autoFocus
        />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type='password'
          placeholder='Mot de passe'
          {...formik.getFieldProps('password')}
        />
        <Form.Text className={styles.textLink} as={NavLink} to='/recuperation'>
          Mot de passe oublié ?
        </Form.Text>
      </Form.Group>
      <Button className={styles.loginButton} type='submit'>
        Se connecter
      </Button>
      <Form.Text className={styles.textLink} as={NavLink} to='/inscription'>
        S'inscrire
      </Form.Text>
      <br />
      {
        error !== null
          ? <Alert variant='danger'>
            {error}
          </Alert>
          : null
      }
    </Form>
  )
}

export default withRouter(LoginForm)
