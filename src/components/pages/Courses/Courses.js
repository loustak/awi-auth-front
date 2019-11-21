import React, { useEffect, useState } from 'react'
import Collapse from '../../Collapse/Collapse'
import UEItem from '../../CollapseItems/UEItem/UEItem'
import { setPeriodsSubjects } from '../../../store/actions/periods.action'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from '../../Dashboard/Dashboard.module.css'
import { Col, Form } from 'react-bootstrap'
import { useFormik } from 'formik'

function Courses (props) {
  const [query, setQuery] = useState('')
  const periods = props.periods.periods
  const isFirtSemester = (new Date().getMonth() < 8)

  useEffect(() => {
    if (!props.periods.fetched) {
      setPeriodsSubjects('IG', 4)
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      name: ''
    }
  })

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
              <Form>
                <Form.Row className={styles.searchBar}>
                  <Form.Group as={Col} controlId='name'>
                    <Form.Label>Rechercher</Form.Label>
                    <Form.Control
                      placeholder='Rechercher'
                      type='text'
                      {...formik.getFieldProps('name')}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>

              <div>
                {
                  periods.length > 0
                    ? periods.filter(p => (p.modules && p.modules.length > 0)).map((p, i) => {
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

const stateMap = (state) => {
  return {
    periods: state.periods
  }
}

export default connect(stateMap)(withRouter(Courses))
