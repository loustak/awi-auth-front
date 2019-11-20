import React, { useRef, useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import { addMark } from '../../../store/actions/subjects.action'
import Modal from '../../Modal/Modal'
import styles from './ExamItem.module.css'
import Collapse from '../../Collapse/Collapse'
import MarkItem from '../MarkItem/MarkItem'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import { CSVLink, CSVDownload } from 'react-csv'
import Button from '../../Button/Button'

function ExamItem (props) {

  // let avg = props.marks.reduce((total, current) => total + (current.mark * current.coeff), 0) / props.marks.reduce((total, current) => total + current.coeff, 0)
  // avg = Math.round(avg * 100) / 100

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

  return (
    <div className={styles.examItem}>
      <Collapse
        title={props.name + ' | Coeff : ' + props.coeff + ' | moyenne : TODO'}
        button={<CSVLink data={data} headers={headers} filename={props.name + '.csv'} className='btn btn-blue' style={{borderRadius: '9999px'}}>Exporter</CSVLink>}
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

const stateMap = (state) => {
  return {
    subjects: state.subjects
  }
}

export default connect(stateMap)(ExamItem)
