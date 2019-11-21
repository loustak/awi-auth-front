import React, { useEffect } from 'react'
import Collapse from '../../Collapse/Collapse'
import UEItem from '../../CollapseItems/UEItem/UEItem'
import { setPeriodsSubjects } from '../../../store/actions/periods.action'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
          ? <h2>NO DATA</h2>
          : <div className='applicationItem'>
            <div>
              {
                periods.length > 0
                  ? periods.map((p, i) => {
                    return (p.modules && p.modules.length > 0
                      ? <React.Fragment key={i}>
                        <Collapse title={p.title} defaultOpen={i === 0}>
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
