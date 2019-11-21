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

  const filteredSemesters = props.simulator.semesters
    .filter(semester => formik.values.semester !== '' ? semester.name === formik.values.semester : true)

  return (
    <>
      <div className={styles.simulatorHeader}>
        <Form>
          <Form.Row className={styles.searchBar}>
            <Form.Group as={Col} controlId='semester'>
              <Form.Label>Semestre</Form.Label>
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
              <div key={'ue' + i}>
                <Collapse
                  defaultOpen
                  title={ue.name}
                  key={Math.random()}
                  subtitle={'ECTS: ' + markOperations.getECTSFromUE(ue) + ' - Moyenne: ' + markOperations.getAverageFromUE(ue)}
                >
                  {
                    ue.subjects.map((subject, j) =>
                      <SubjectItem
                        semesterName={filteredSemesters[0].name}
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
