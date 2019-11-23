import React from 'react'
import styles from './RegisterForm.module.css'
import Form from 'react-bootstrap/Form'
import Button from '../../Button/Button'
import { NavLink, withRouter } from 'react-router-dom'
import { useFormik } from 'formik'

function RegisterForm (props) {
  // -----------------------------VARIBALES-------------------------------------

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    onSubmit: values => {
      props.history.push('/')
    }
  })

  // -----------------------------RETURN-------------------------------------

  return (
    <Form className={styles.registerForm} onSubmit={formik.handleSubmit}>
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
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Confirmation mot de passe</Form.Label>
        <Form.Control
          type='password'
          placeholder='Confirmation mot de passe'
          {...formik.getFieldProps('passwordConfirmation')}
        />
      </Form.Group>
      <Button className={styles.registerButton} type='submit'>
        S'inscrire
      </Button>
      <Form.Text className={styles.textLink} as={NavLink} to='/connexion'>
        Se connecter
      </Form.Text>
    </Form>
  )
}

export default withRouter(RegisterForm)
