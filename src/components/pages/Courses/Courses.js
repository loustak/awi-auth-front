import React, { useEffect } from 'react'
import Collapse from '../../Collapse/Collapse'
import UEItem from '../../CollapseItems/UEItem/UEItem'
import { setPeriodsSubjects } from '../../../store/actions/periods.action'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from '../../Dashboard/Dashboard.module.css'

function Courses (props) {

  const periods = props.periods.periods

  useEffect(() => {
    if (!props.periods.fetched) {
      setPeriodsSubjects('IG', 4)
    }
  }, [])

  return (
    <>
      {
        (!props.periods.fetched)
          ? <div  className={styles.loading}>
            <div className="spinner-border text-info" role="status">
              <span className="sr-only"/>
            </div>
            <div className={styles.loadingText}>
              <h4>Chargement en cours</h4>
            </div>
          </div>
          : <div className='applicationItem'>
            <div>
              {
                periods.length > 0
                  ? periods.map((p, i) => {
                    const isFirtSemester = (new Date().getMonth() > 8)
                    return (p.modules && p.modules.length > 0
                      ? <React.Fragment key={i}>
                        <Collapse title={p.title} defaultOpen={isFirtSemester ? 1 : 0}>
                          <UEItem ue={p.modules} />
                        </Collapse>
                        <br />
                      </React.Fragment>
                      : null)
                  })
                  : null
              }
            </div>
          </div>
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
