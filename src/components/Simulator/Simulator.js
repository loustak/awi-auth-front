import React from 'react'
import { connect } from 'react-redux'
import styles from '../Dashboard/Dashboard.module.css'
import Collapse from '../Collapse/Collapse'
import { useFormik } from 'formik'
import { Col, Form } from 'react-bootstrap'
import SubjectItem from '../CollapseItems/SubjectItem/SubjectItem'
import ErrorPage from '../common/ErrorPage/ErrorPage'
import markOperations from '../../utils/MarksOperations'

function Simulator (props) {
  const formik = useFormik({
    initialValues: {
      semester: ''
    }
  })

  const semesters =
    [
      {
        name: 'Semestre 8',
        ue: [
          {
            name: 'Architecture des Systemes d\'Information',
            subjects: [
              {
                name: 'Applications Web et Interopérabilité',
                ects: 4.5,
                tests: [
                  {
                    mark: 13,
                    exam: 'Devoir surveillé',
                    coeff: 2
                  },
                  {
                    mark: 11,
                    exam: 'Quizz',
                    coeff: 1
                  }
                ]
              },
              {
                name: 'Tests des Systèmes d\'Information',
                ects: 0.5,
                tests: [
                  {
                    mark: 13,
                    exam: 'Oral',
                    coeff: 2
                  }
                ]
              },
              {
                name: 'Urbanisation des SI',
                ects: 1,
                tests: [
                  {
                    mark: 4,
                    exam: 'DS',
                    coeff: 2
                  },
                  {
                    mark: 3,
                    exam: 'Quizz',
                    coeff: 1
                  }
                ]
              }
            ]
          },
          {
            name: 'Traitement des données et sécurité',
            subjects: [
              {
                name: 'Sécurité des SI',
                ects: 1
              },
              {
                name: 'Data Science Avancée',
                ects: 1,
                tests: [
                  {
                    mark: 11,
                    exam: 'DS',
                    coeff: 2
                  },
                  {
                    mark: 6,
                    exam: 'Quizz',
                    coeff: 1
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Semestre 9'
      }
    ]

  const filteredSemesters = semesters
    .filter(semester => formik.values.semester !== '' ? semester.name === formik.values.semester : true)

  return (
    <>
      <div className={styles.simulatorHeader}>
        <Form>
          <Form.Row className={styles.searchBar}>
            <Form.Group as={Col} controlId='semester'>
              <Form.Label>Année</Form.Label>
              <Form.Control
                as='select'
                {...formik.getFieldProps('semester')}
              >
                <option value=''>Choisissez un semestre</option>
                <option value='Semestre 8'>Semestre 8</option>
                <option value='Semestre 9'>Semestre 9</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
      {
        filteredSemesters.length === 1
          ? filteredSemesters[0].ue !== undefined
            ? filteredSemesters[0].ue.map((ue, i) =>

              <>
                <Collapse
                  defaultOpen
                  title={ue.name}
                  subtitle={'ECTS: ' + markOperations.getECTSFromUE(ue)}
                  key={i}
                >
                  {
                    ue.subjects.map((subject, j) =>
                      <SubjectItem
                        {...subject}
                        average={markOperations.getAverageFromSubject(subject)}
                        key={j}
                      />
                    )
                  }
                </Collapse>
                <br />
              </>
            )
            : <ErrorPage errorMessage='Aucune UE associée' />
          : <ErrorPage errorMessage='Aucun semestre sélectionné' />
      }
    </>
  )
}

const stateMap = (state) => {
  return {
    simulator: state.simulator
  }
}

export default connect(stateMap)(Simulator)
