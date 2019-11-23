import React from 'react'
import styles from './RecoveryForm.module.css'
import Form from 'react-bootstrap/Form'
import Button from '../../Button/Button'
import { NavLink, withRouter } from 'react-router-dom'
import { useFormik } from 'formik'

function RecoveryForm (props) {
  // -----------------------------VARIBALES-------------------------------------

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      props.history.push('/')
    }
  })

  // -----------------------------RETURN-------------------------------------

  return (
    <Form className={styles.recoveryForm} onSubmit={formik.handleSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Email'
          {...formik.getFieldProps('email')}
          autoFocus
        />
      </Form.Group>
      <Button className={styles.recoveryButton} type='submit'>
        Réinitialiser le mot de passe
      </Button>
      <Form.Text className={styles.textLink} as={NavLink} to='/connexion'>
        Se connecter
      </Form.Text>
      <Form.Text className={styles.textLink} as={NavLink} to='/inscription'>
        S'inscrire
      </Form.Text>
    </Form>
  )
}

export default withRouter(RecoveryForm)
