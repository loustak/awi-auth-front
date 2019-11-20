import React from 'react'
import { connect } from 'react-redux'
import styles from './Dashboard.module.css'
import Collapse from '../Collapse/Collapse'
import { Button, ButtonGroup, Col, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import ExamItem from '../CollapseItems/ExamItem/ExamItem'
import { withRouter } from 'react-router-dom'
import { CSVLink } from 'react-csv'

function Dashboard (props) {
  const formik = useFormik({
    initialValues: {
      search: '',
      training: '',
      year: ''
    }
  })

  function matchSearch (subject, query) {
    return subject.name.toLowerCase().match(query) ||
      subject.training.toLowerCase().match(query) ||
      subject.year.toString().match(query)
  }

  const filteredSubjects = props.subjects.subjects
    .filter(subject => formik.values.training !== '' ? subject.training === formik.values.training : true)
    .filter(subject => formik.values.year !== '' ? subject.year === parseInt(formik.values.year) : true)
    .filter(subject => formik.values.search !== '' ? matchSearch(subject, formik.values.search.toLowerCase()) : true)

  return (
    <>
      {
        (!props.students.students)
          ? <div>loading</div>
          : <div className={styles.dashboard}>
            <div>
              <Form>
                <Form.Row className={styles.searchBar}>
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
                // let avg = subject.students.reduce((total, current) => {
                //   return total + current.marks.reduce((total2, current2) => {
                //     return total2 + (current2.mark * current2.coeff)
                //   }, 0) / current.marks.reduce((total2, current2) => {
                //     return total2 + current2.coeff
                //   }, 0)
                // }, 0) / subject.students.length
                // avg = Math.round(avg * 100) / 100

                const headers = [
                  { label: 'examName', key: 'name' },
                  { label: 'examCoeff', key: 'coeff' },
                  { label: 'studentID', key: 'student' },
                  { label: 'studentFirstName', key: 'firstName' },
                  { label: 'studentLastName', key: 'lastName' },
                  { label: 'note', key: 'mark' }
                ]

                const data = subject.exams.flatMap(exam => {
                  return exam.marks.map(mark => {
                    const student = props.students.students.filter(s => s.id === mark.student)[0]
                    return {
                      name: exam.name,
                      coeff: exam.coeff,
                      student: mark.student,
                      firstName: student.firstName,
                      lastName: student.lastName,
                      mark: mark.mark
                    }
                  })
                })

                return (
                  <Collapse
                    title={subject.name + ' | ' + subject.training + ' ' + subject.year + ' | moyenne : TODO'}
                    key={i}
                    button={
                      <ButtonGroup className='roundedButtonGroup'>
                        <Button
                          variant='blue'
                          onClick={() => props.history.push({ pathname: '/notes', state: { subject: subject } })}
                        >
                          Ajouter un examen
                        </Button>
                        <CSVLink
                          data={data}
                          headers={headers}
                          filename={subject.name + '_' + subject.training + '_' + subject.year + '.csv'}
                          className='btn btn-blue'
                        >
                          Exporter
                        </CSVLink>
                      </ButtonGroup>
                    }
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
                        subject.exams.map((exam, j) =>
                          <ExamItem
                            {...exam}
                            students={props.students.students}
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
      }
    </>
  )
}

const stateMap = (state) => {
  return {
    subjects: state.subjects,
    students: state.students
  }
}

export default connect(stateMap)(withRouter(Dashboard))
