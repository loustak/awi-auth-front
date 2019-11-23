import React, { useEffect } from 'react'
import Collapse from '../../Collapse/Collapse'
import UEItem from '../../CollapseItems/UEItem/UEItem'
import { setPeriodsSubjects } from '../../../store/actions/periods.action'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from '../../Dashboard/Dashboard.module.css'
import { Col, Form } from 'react-bootstrap'
import { useFormik } from 'formik'

function Courses (props) {
  // -----------------------------VARIABLES-------------------------------------

  const periods = props.periods.periods
  const isFirtSemester = (new Date().getMonth() > 8)

  const year = props.currentUser.user ? props.currentUser.user.section.substr(props.currentUser.user.section.length - 1) : null
  const training = props.currentUser.user ? props.currentUser.user.section.slice(0, -1).toUpperCase() : null

  const formik = useFormik({
    initialValues: {
      name: ''
    }
  })

  // -----------------------------FUNCTIONS-------------------------------------

  useEffect(() => {
    if (!props.periods.fetched && props.currentUser.fetched && !props.periods.fetching) {
      setPeriodsSubjects(training, year)
    }
  })

  // -----------------------------RETURN-------------------------------------

  return (
    <>
      {
        (!props.periods.fetched)
          ? <div className={styles.loading}>
            <div className='spinner-border text-info' role='status'>
              <span className='sr-only' />
            </div>
            <div className={styles.loadingText}>
              <h4>Chargement en cours</h4>
            </div>
          </div>
          : <>
            <div className='applicationItem'>
              <div className='divSearchBarDash'>
                <Form onSubmit={e => e.preventDefault()}>
                  <Form.Row className='searchBarDash'>
                    <Form.Group as={Col} controlId='name'>
                      <Form.Label>Rechercher une UE ou une Matière : </Form.Label>
                      <Form.Control
                        placeholder='Rechercher'
                        type='text'
                        {...formik.getFieldProps('name')}
                      />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </div>

              <div>
                {
                  periods.length > 0
                    ? periods.filter(p => (p.modules && p.modules.length > 0)).sort((a, b) => {
                      const nameA = a.title.toLowerCase()
                      const nameB = b.title.toLowerCase()
                      if (nameA < nameB) {
                        return 1
                      }
                      if (nameA > nameB) {
                        return -1
                      }
                      return 0
                    }).map((p, i) => {
                      return (
                        <React.Fragment key={i}>
                          <Collapse title={p.title} defaultOpen={isFirtSemester ? (i === 0 ? 1 : 0) : (i === 1 ? 1 : 0)}>
                            <UEItem ue={p.modules} query={formik.values.name.toLowerCase()} />
                          </Collapse>
                          <br />
                        </React.Fragment>
                      )
                    })
                    : null
                }
              </div>
            </div>
          </>
      }
    </>
  )
}

// -----------------------------STATEMAP-------------------------------------

const stateMap = (state) => {
  return {
    periods: state.periods,
    currentUser: state.currentUser
  }
}

export default connect(stateMap)(withRouter(Courses))
