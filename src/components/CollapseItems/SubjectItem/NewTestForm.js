import React from 'react'
import styles from './SubjectItem.module.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form } from 'react-bootstrap'
import { addTest } from '../../../store/actions/periods.action'
import { useFormik } from 'formik'
import classNames from 'classnames'

function NewTestForm (props) {
  // -----------------------------VARIABLES-------------------------------------

  const formik = useFormik({
    initialValues: {
      exam: 'Partiel',
      mark: 10,
      coeff: 1
    }
  })

  // -----------------------------FUNCTIONS-------------------------------------

  function handleSubmit (e) {
    addTest(props.semesterName, props.ueId, props.subjectId, formik.values.exam, formik.values.mark, formik.values.coeff)
    formik.resetForm()
    e.preventDefault()
  }

  // -----------------------------RETURN-------------------------------------

  return (
    <Form onSubmit={handleSubmit} className={classNames({ [styles.testContainer]: true, [styles.newTestContainer]: true })}>
      <Form.Control {...formik.getFieldProps('exam')} type='text' className={styles.testName} />
      <div className={styles.markFieldContainer}>
        <Form.Control
          {...formik.getFieldProps('mark')}
          className={styles.testNumberInfo}
          type='number'
          step='0.01'
          max={20}
          min={0}
          required
        />
        <div className={styles.subjectUnderDescription}>/20</div>
      </div>
      <div>
        <Form.Control
          {...formik.getFieldProps('coeff')}
          className={styles.testNumberInfo}
          type='number'
          step='0.5'
          min={0}
          required
        />
        <div className={styles.subjectUnderDescription}>Coeff</div>
      </div>
      <Button type='submit' className={styles.testButton}>
        <FontAwesomeIcon
          icon={faPlus}
          className={styles.testButtonIcon}
        />
      </Button>
    </Form>
  )
}

export default NewTestForm
