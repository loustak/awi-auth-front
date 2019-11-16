import React from 'react'
import { connect } from 'react-redux'
import styles from './Dashboard.module.css'
import Collapse from '../Collapse/Collapse'
import StudentItem from '../CollapseItems/StudentItem/StudentItem'
import { Col, Form } from 'react-bootstrap'
import { useFormik } from 'formik'

function Dashboard (props) {
  const formik = useFormik({
    initialValues: {
      search: '',
      training: '',
      year: ''
    }
  })

  function matchSubject (subject, query) {
    return subject.name.toLowerCase().match(query) ||
    subject.training.toLowerCase().match(query) ||
    subject.year.toString().match(query)
  }

  const filteredSubjects = props.subjects.subjects
    .filter(subject => formik.values.training !== '' ? subject.training === formik.values.training : true)
    .filter(subject => formik.values.year !== '' ? subject.year === parseInt(formik.values.year) : true)
    .filter(subject => formik.values.search !== '' ? matchSubject(subject, formik.values.search.toLowerCase()) : true)

  return (
    <div className={styles.dashboard}>
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId='search'>
              <Form.Label>Rechercher</Form.Label>
              <Form.Control
                placeholder='Rechercher'
                type='text'
                {...formik.getFieldProps('search')}
              />
            </Form.Group>
            <Form.Group as={Col} controlId='training'>
              <Form.Label>Formation</Form.Label>
              <Form.Control
                as='select'
                {...formik.getFieldProps('training')}
              >
                <option value=''>Choose...</option>
                <option>IG</option>
                <option>MEA</option>
                <option>STE</option>
                <option>GBA</option>
                <option>MI</option>
                <option>MAT</option>
                <option>PeiP</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId='year'>
              <Form.Label>Année</Form.Label>
              <Form.Control
                as='select'
                {...formik.getFieldProps('year')}
              >
                <option value=''>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
      {
        filteredSubjects.map((subject, i) => {
          let avg = subject.students.reduce((total, current) => {
            return total + current.marks.reduce((total2, current2) => {
              return total2 + (current2.mark * current2.coeff)
            }, 0) / current.marks.reduce((total2, current2) => {
              return total2 + current2.coeff
            }, 0)
          }, 0) / subject.students.length
          avg = Math.round(avg * 100) / 100

          return (
            <Collapse
              title={subject.name + ' | ' + subject.training + ' ' + subject.year + ' | moyenne : ' + avg}
              key={i}
            >
              <div
                style={{
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  display: 'grid',
                  gridRowGap: '20px'
                }}
              >
                {
                  subject.students.map((student, j) =>
                    <StudentItem
                      {...student}
                      subjectId={subject.id}
                      key={j}
                    />
                  )
                }
              </div>
            </Collapse>
          )
        })
      }
    </div>
  )
}

const stateMap = (state) => {
  return {
    subjects: state.subjects
  }
}

export default connect(stateMap)(Dashboard)
