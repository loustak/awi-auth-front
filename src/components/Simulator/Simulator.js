import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from '../Dashboard/Dashboard.module.css'
import Collapse from '../Collapse/Collapse'
import { useFormik } from 'formik'
import { Col, Form } from 'react-bootstrap'
import SubjectItem from '../CollapseItems/SubjectItem/SubjectItem'
import ErrorPage from '../common/ErrorPage/ErrorPage'
import markOperations from '../../utils/MarksOperations'
import { withRouter } from 'react-router-dom'
import { setPeriodsSubjects } from '../../store/actions/periods.action'

function Simulator (props) {
  const periods = props.periods.periods.filter(period => period.modules && period.modules.length > 0)
  const formik = useFormik({
    initialValues: {
      semester: ''
    }
  })
  const year = props.currentUser.user ? props.currentUser.user.section.substr(props.currentUser.user.section.length - 1) : null
  const training = props.currentUser.user ? props.currentUser.user.section.slice(0, -1).toUpperCase() : null

  useEffect(() => {
    if (!props.periods.fetched && props.currentUser.fetched && !props.periods.fetching) {
      setPeriodsSubjects( training, year)
    }
  }, [])
  const filteredSemesters = periods
    .filter(semester => formik.values.semester !== '' ? semester.title === formik.values.semester : true)

  return (
    <>
      {
        (props.periods.fetched)
          ? <>
            <div className={styles.simulatorHeader}>
              <Form>
                <Form.Row className={styles.searchBar}>
                  <Form.Group as={Col} controlId='semester'>
                    <Form.Label>Semestre</Form.Label>
                    <Form.Control
                      as='select'
                      {...formik.getFieldProps('semester')}
                      className={styles.simulatorFormSemester}
                    >
                      <option value=''>Choisissez un semestre</option>
                      {
                        periods.map((period, i) => <option key={Math.random()} value={period.title}>{period.title}</option>)
                      }
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Form>
              {
                formik.values.semester !== ''
                  ? <div className={styles.simulatorGlobalAverage}>
                    Moyenne : {markOperations.getGlobalAverage(filteredSemesters[0])}
                </div>
                  : null
              }
            </div>
            {
              filteredSemesters.length === 1
                ? filteredSemesters[0].modules !== undefined
                  ? filteredSemesters[0].modules.map((ue) => {
                    return markOperations.getECTSFromUE(ue) > 0
                      ? <div key={Math.random()}>
                        <Collapse
                          defaultOpen
                          title={ue.title}
                          key={Math.random()}
                          subtitle={'ECTS: ' + markOperations.getECTSFromUE(ue) + ' - Moyenne: ' + markOperations.getAverageFromUE(ue)}
                        >
                          {
                            ue.subjects.map((subject, j) =>
                              <SubjectItem
                                semesterName={filteredSemesters[0].title}
                                ueId={ue.id}
                                {...subject}
                                average={markOperations.getAverageFromSubject(subject)}
                                key={Math.random()}
                              />
                            )
                          }
                        </Collapse>
                        <br />
                      </div>
                      : null
                  }
                  )
                  : <ErrorPage errorMessage='Aucune UE associée' />
                : null
            }
            </>
          : <div className={styles.loading}>
            <div className='spinner-border text-info' role="status">
              <span className='sr-only'/>
            </div>
            <div className={styles.loadingText}>
              <h4>Chargement en cours</h4>
            </div>
            </div>
      }
    </>
  )
}

const stateMap = (state) => {
  return {
    periods: state.periods,
    currentUser: state.currentUser
  }
}

export default connect(stateMap)(withRouter(Simulator))
