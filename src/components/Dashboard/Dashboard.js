import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './Dashboard.module.css'
import Collapse from '../Collapse/Collapse'
import { Button, ButtonGroup, Col, Form} from 'react-bootstrap'
import { useFormik } from 'formik'
import ExamItem from '../CollapseItems/ExamItem/ExamItem'
import { withRouter } from 'react-router-dom'
import { CSVLink} from 'react-csv'
import { setTeacherSubjects } from '../../store/actions/subjects.action'
import EmptyItem from '../CollapseItems/EmptyItem/EmptyItem'

function Dashboard (props) {

  useEffect(() => {
    if (!props.subjects.fetched) {
      setTeacherSubjects('Arnaud','Castelltort')
    }
  },[])


  const formik = useFormik({
    initialValues: {
      search: '',
      training: ''
    }
  })

  function matchSearch (subject, query) {
    return subject.title.toLowerCase().match(query) ||
      subject.training.toLowerCase().match(query)
  }

  const filteredSubjects = props.subjects.subjects
    .filter(subject => formik.values.training !== '' ? subject.training === formik.values.training : true)
    .filter(subject => formik.values.search !== '' ? matchSearch(subject, formik.values.search.toLowerCase()) : true)

  return (
    <>
      {
        (!props.subjects.fetched)
          ? <div  className={styles.loading}>
              <div className="spinner-border text-info" role="status">
                <span className="sr-only"/>
              </div>
              <div className={styles.loadingText}>
                <h4>Chargement en cours</h4>
              </div>
            </div>
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
                      <option value=''>Choisir...</option>
                      <option>IG</option>
                      <option>MEA</option>
                      <option>STE</option>
                      <option>GBA</option>
                      <option>MI</option>
                      <option>MAT</option>
                      <option>PeiP</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>
            {
              filteredSubjects.map((subject, i) => {

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
                    title={subject.title + (subject.training ? ' | ' + subject.training : '') }
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
                          filename={subject.title + '.csv'}
                          className='btn btn-blue'
                        >
                          Exporter
                        </CSVLink>
                      </ButtonGroup>
                    }
                  >
                    {
                      subject.exams.length > 0?
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
                            {
                              return(
                                <ExamItem
                                  {...exam}
                                  students={props.students.students}
                                  key={j}
                                />
                              )
                            })
                          }
                        </div>
                        : <EmptyItem message='Aucun examen ajouté'/>
                    }
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
