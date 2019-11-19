import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addExam } from '../../../store/actions/subjects.action'

function AddMarkPage (props) {
  console.log(props)

  const formikInitialValues = {
    name: '',
    coeff: ''
  }

  props.students.students.forEach(student => {
    formikInitialValues['note_' + student.id] = ''
  })

  const formikExam = useFormik({
    initialValues: formikInitialValues,
    onSubmit: values => {
      console.log(values)

      const emptyIds = Object.keys(values).filter(k => values[k] === '').map(k => parseInt(k.substring(5)))
      console.log(emptyIds)
      const emptyNames = emptyIds.map(id => {
        const student = props.students.students.filter(s => s.id === id)[0]
        return student.lastName + ' ' + student.firstName
      })
      console.log(emptyNames)

      if (window.confirm('Des étudiants n\'ont pas de note :\n' + emptyNames.join("\n"))) {
        const exam = {
          name: values.name,
          coeff: values.coeff,
          marks: Object.keys(values).filter(v => v.startsWith('note_')).map(mark => {
            return { student: parseInt(mark.substring(5)), mark: parseInt(values[mark]) }
          })
        }

        console.log(exam)
        addExam(props.location.state.subjectId, exam.name, exam.coeff, exam.marks)
        props.history.push('/dashboard')
      }
    }
  })

  return (
    <>
      <Form onSubmit={formikExam.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId='exam'>
            <Form.Label>Examen</Form.Label>
            <Form.Control
              type='text'
              {...formikExam.getFieldProps('name')}
            />
          </Form.Group>
          <Form.Group as={Col} controlId='coeff'>
            <Form.Label>Coefficient</Form.Label>
            <Form.Control
              type='number'
              {...formikExam.getFieldProps('coeff')}
            />
          </Form.Group>
        </Form.Row>
        {
          props.location.state.subjectId
            ? props.students.students.map((student, i) =>
              <Form.Group as={Row} controlId={'mark_' + student.id} key={i}>
                <Form.Label column xs>{student.firstName + ' ' + student.lastName}</Form.Label>
                <Col xs>
                  <Form.Control
                    type='number'
                    autoFocus
                    {...formikExam.getFieldProps('note_' + student.id)}
                  />
                </Col>
              </Form.Group>
            )
            : null
        }
        <Button
          variant='blue'
          type='submit'
          disabled={formikExam.values.name === '' || formikExam.values.coeff === ''}
        >
          Enregistrer
        </Button>
      </Form>
    </>
  )
}

const stateMap = (state) => {
  return {
    students: state.students
  }
}

export default connect(stateMap)(withRouter(AddMarkPage))
