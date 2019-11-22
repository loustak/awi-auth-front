import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from '../Dashboard/Dashboard.module.css'
import Collapse from '../Collapse/Collapse'
import { Form } from 'react-bootstrap'
import SubjectItem from '../CollapseItems/SubjectItem/SubjectItem'
import ErrorPage from '../common/ErrorPage/ErrorPage'
import markOperations from '../../utils/MarksOperations'
import { withRouter } from 'react-router-dom'
import { setPeriodsSubjects } from '../../store/actions/periods.action'

function Simulator (props) {

  //-----------------------------FUNCTIONS-------------------------------------

  const periods = props.periods.periods.filter(period => period.modules && period.modules.length > 0)
    .sort((a, b) => {
      const nameA = a.title.toLowerCase()
      const nameB = b.title.toLowerCase()
      if (nameA < nameB) {
        return 1
      }
      if (nameA > nameB) {
        return -1
      }
      return 0
    })

  const [selectedSemester, setSelectedSemester] = useState('')
  const [defaultSemesterChanged = false, setDefaultSemesterChanged] = useState('')

  const year = props.currentUser.user ? props.currentUser.user.section.substr(props.currentUser.user.section.length - 1) : null
  const training = props.currentUser.user ? props.currentUser.user.section.slice(0, -1).toUpperCase() : null

  const filteredSemesters = periods
    .filter(semester => selectedSemester !== '' ? semester.title === selectedSemester : true)

  //-----------------------------FUNCTIONS-------------------------------------

  useEffect(() => {
    if (!props.periods.fetched && props.currentUser.fetched && !props.periods.fetching) {
      setPeriodsSubjects(training, year)
    }
    if (periods && periods.length > 0 && !defaultSemesterChanged) {
      setSelectedSemester(periods[0].title)
      setDefaultSemesterChanged(true)
    }
  })

  //-----------------------------RETURN-------------------------------------

  const globalAvg = markOperations.getGlobalAverage(filteredSemesters[0])
  return (
    <>
      {
        (props.periods.fetched)
          ? <>
            <div className={styles.simulatorHeader}>
              <Form>
                <Form.Label>Semestre</Form.Label>
                  <Form.Control
                    as='select'
                    className={styles.simulatorFormSemester}
                    onChange={e => {
                      setSelectedSemester(e.target.value)
                      e.target.blur()
                    }}
                    value={selectedSemester}
                  >
                  <option value=''>Choisissez un semestre</option>
                  {
                    periods.map((period, i) => <option key={Math.random()} value={period.title}>{period.title}</option>)
                  }
                </Form.Control>
              </Form>
              {
                selectedSemester !== ''
                  ? <div className={styles.simulatorGlobalAverage}>
                    Moyenne Générale
                    <div className={styles.simulatorGlobalAverageMark}>
                      <span className={(globalAvg
                        ? globalAvg < 6
                          ? styles.averageDanger
                          : globalAvg < 10
                            ? styles.averageRisk
                            : styles.averageValid
                        : styles.averageMissing)}
                      >
                        {globalAvg ? globalAvg.toString() : '-'}
                      </span>
                    </div>
                    </div>
                  : null
              }
            </div>
            {
              filteredSemesters.length === 1
                ? filteredSemesters[0].modules !== undefined
                  ? filteredSemesters[0].modules.map((ue) => {
                    const ueAvg = markOperations.getAverageFromUE(ue)
                    const ueAvgFiltered = ueAvg ? ' - Moyenne: ' + ueAvg.toString() : ''
                    return markOperations.getECTSFromUE(ue) > 0
                      ? <div key={Math.random()}>
                        <Collapse
                          defaultOpen
                          title={ue.title}
                          key={Math.random()}
                          subtitle={'ECTS: ' + markOperations.getECTSFromUE(ue) + ueAvgFiltered}
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
            <div className='spinner-border text-info' role='status'>
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

//-----------------------------STATEMAP-------------------------------------

const stateMap = (state) => {
  return {
    periods: state.periods,
    currentUser: state.currentUser
  }
}

export default connect(stateMap)(withRouter(Simulator))
