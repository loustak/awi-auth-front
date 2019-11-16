import React from 'react'
import styles from './Dashboard.module.css'
import Collapse from '../Collapse/Collapse'
import StudentItem from '../CollapseItems/StudentItem/StudentItem'

const matieres = [
  {
    name: 'AWI',
    students: [
      {
        name: 'Student 1',
        marks: [
          {
            mark: 10,
            exam: 'DS',
            coeff: '1'
          },
        ],
      },
      {
        name: 'Student 2',
        marks: [
          {
            mark: 11,
            exam: 'DS',
            coeff: '1'
          },
        ],
      },
    ],
  },
  {
    name: 'WI',
    students: [
      {
        name: 'Student 3',
        marks: [
          {
            mark: 12,
            exam: 'DS',
            coeff: '1'
          },
        ],
      },
      {
        name: 'Student 4',
        marks: [
          {
            mark: 13,
            exam: 'DS',
            coeff: '1'
          },
        ],
      },
    ],
  },
]

function Dashboard(props) {
  return (
    <div className={styles.dashboard}>
      {
        matieres.map((matiere, i) =>
          <Collapse
            title={matiere.name}
            key={i}
          >
            <div style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              display: 'grid',
              gridRowGap: '20px'
            }}>
              {
                matiere.students.map((student, j) =>
                  <StudentItem
                    name={student.name}
                    marks={student.marks}
                    key={j}
                  />,
                )
              }
            </div>
          </Collapse>
        )
      }
    </div>
  )
}

export default Dashboard
