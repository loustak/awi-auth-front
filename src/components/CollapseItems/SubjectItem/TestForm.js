import React from 'react'
import styles from './SubjectItem.module.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'

function TestForm (props) {
  const formik = useFormik({
    initialValues: {
      exam: props.test.exam,
      mark: props.test.mark,
      coeff: props.test.coeff
    }
  })

  function handleSubmit (e) {
    console.log('Semestre 8', 1, 1, formik.values.exam, formik.values.mark, formik.values.coeff)
    e.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit} className={styles.testContainer}>
      <Form.Control {...formik.getFieldProps('exam')} type='text' className={styles.testName} />
      <div className={styles.markFieldContainer}>
        <Form.Control
          {...formik.getFieldProps('mark')}
          className={styles.testNumberInfo}
          type='number'
          step='0.01'
        />
        <div className={styles.subjectUnderDescription}>/20</div>
      </div>
      <div>
        <Form.Control
          {...formik.getFieldProps('coeff')}
          className={styles.testNumberInfo}
          type='number'
          step='0.5'
        />
        <div className={styles.subjectUnderDescription}>Coeff</div>
      </div>
      <Button type='submit' className={styles.testButton}>
        <FontAwesomeIcon
          icon={faTimes}
          className={styles.testButtonIcon}
        />
      </Button>
    </Form>
  )
}

export default TestForm
