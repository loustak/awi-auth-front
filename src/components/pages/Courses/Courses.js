import React, { useState, useEffect } from 'react'
import Collapse from '../../Collapse/Collapse'
import UEItem from '../../CollapseItems/UEItem/UEItem'
import { setPeriodsSubjects } from '../../../store/actions/periods.action'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const courses = [
  {
    name: 'Cours 1',
    teacher: 'Arnaud Castelltort',
    hours: '33',
    credit: '1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: ''
  },
  {
    name: 'Cours 2',
    teacher: 'Anne Laurent',
    hours: '33',
    credit: '1',
    description: '',
    content: ''
  },
  {
    name: 'Cours 3',
    teacher: 'Arnaud Castelltort',
    hours: '33',
    credit: '1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma',
    content: ''
  }
]

const UE1 =
  {
    name: 'UE-TEST',
    credit: '9',
    courses: courses
  }

const semestres = [
  {
    name: 'Semestre 1',
    ue: [UE1, UE1]
  },
  {
    name: 'Semestre 2',
    ue: [UE1, UE1]
  }
]

function Courses (props) {
  const [search, setSearch] = useState('')

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
                    const mod = p.modules
                    //console.log('MODULE')
                    console.log(p)
                    console.log(p.modules)
                    const mods = {
                      ...p
                    }
                    console.log(mods)
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
