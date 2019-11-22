import React from 'react'
import styles from './ExamItem.module.css'
import Collapse from '../../Collapse/Collapse'
import MarkItem from '../MarkItem/MarkItem'
import { connect } from 'react-redux'
import { CSVLink } from 'react-csv'
import { Button, ButtonGroup } from 'react-bootstrap'
import { removeExam } from '../../../store/actions/subjects.action'

function ExamItem (props) {

  //-----------------------------VARIABLES-------------------------------------

  let avg = props.marks.reduce((total, current) => total + (isNaN(current.mark) ? 0 : current.mark), 0)
    / props.marks.reduce((total, current) => total + (isNaN(current.mark) ? 0 : 1), 0)

  const headers = [
    { label: 'examName', key: 'name' },
    { label: 'examCoeff', key: 'coeff' },
    { label: 'studentID', key: 'student' },
    { label: 'studentFirstName', key: 'firstName' },
    { label: 'studentLastName', key: 'lastName' },
    { label: 'note', key: 'mark' }
  ]

  const data = props.marks.map(mark => {
    const student = props.students.filter(s => s.id === mark.student)[0]
    return {
      name: props.name,
      coeff: props.coeff,
      student: mark.student,
      firstName: student.firstName,
      lastName: student.lastName,
      mark: mark.mark
    }
  })


  //-----------------------------RETURN-------------------------------------

  return (
    <div className={styles.examItem}>
      <Collapse
        title={props.name + ' | Coeff : ' + props.coeff + ' | Moyenne : ' + avg.toFixed(2)}
        button={
          <ButtonGroup className='roundedButtonGroup'>
            <Button
              variant='blue'
              onClick={() => {
                if (window.confirm('Confirmer la suppression ?')) {
                  removeExam(props.subjectId, props.id)
                }
              }}
            >
              Supprimer
            </Button>
            <CSVLink
              data={data}
              headers={headers}
              filename={props.name + '.csv'}
              className='btn btn-blue'
              style={{ borderTopRightRadius: '9999px', borderBottomRightRadius: '9999px' }}
            >
              Exporter
            </CSVLink>
          </ButtonGroup>
        }
      >
        {
          props.marks.sort((a, b) => {
            const nameA = props.students.filter(s => s.id === a.student)[0].lastName.toLowerCase()
            const nameB = props.students.filter(s => s.id === b.student)[0].lastName.toLowerCase()
            if (nameA < nameB) {
              return -1
            }
            if (nameA > nameB) {
              return 1
            }
            return 0
          }).map((mark, i) =>
            <MarkItem
              {...mark}
              key={i}
            />
          )
        }
      </Collapse>
    </div>
  )
}

//-----------------------------STATEMAP-------------------------------------

const stateMap = (state) => {
  return {
    subjects: state.subjects
  }
}

export default connect(stateMap)(ExamItem)
