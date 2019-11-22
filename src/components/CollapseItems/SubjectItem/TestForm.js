import React from 'react'
import styles from './SubjectItem.module.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form } from 'react-bootstrap'
import { deleteTest, updateTest } from '../../../store/actions/periods.action'
import { useFormik } from 'formik'

function TestForm (props) {
  const formik = useFormik({
    initialValues: {
      exam: props.test.exam,
      mark: props.test.mark,
      coeff: props.test.coeff
    }
  })
  function handleDelete (e) {
    deleteTest(props.semesterName, props.ueId, props.subjectId, props.test.id)
    e.preventDefault()
  }
  function handleUpdate (e) {
    updateTest(props.semesterName, props.ueId, props.subjectId, props.test.id, formik.values.exam, formik.values.mark, formik.values.coeff)
  }
  return (
    <Form onSubmit={handleUpdate} onBlur={handleUpdate} className={styles.testContainer} id={props.test.id + '' + props.subjectId + '' + props.ueId}>
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
      <Button onClick={handleDelete} className={styles.testButton}>
        <FontAwesomeIcon
          icon={faTimes}
          className={styles.testButtonIcon}
        />
      </Button>
      <button type='submit' className='d-none' />
    </Form>
  )
}

export default TestForm
