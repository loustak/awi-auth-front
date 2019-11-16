import React from 'react'
import { connect } from 'react-redux'
import styles from './Dashboard.module.css'
import Collapse from '../Collapse/Collapse'
import StudentItem from '../CollapseItems/StudentItem/StudentItem'

function Dashboard (props) {
  return (
    <div className={styles.dashboard}>
      {
        props.subjects.subjects.map((subject, i) => {
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
              title={subject.name + ' | moyenne : ' + avg}
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
