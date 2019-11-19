import React, { useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import { addMark } from '../../../store/actions/subjects.action'
import Modal from '../../Modal/Modal'
import styles from './ExamItem.module.css'
import Collapse from '../../Collapse/Collapse'
import MarkItem from '../MarkItem/MarkItem'
import { useFormik } from 'formik'

function ExamItem (props) {
  // let avg = props.marks.reduce((total, current) => total + (current.mark * current.coeff), 0) / props.marks.reduce((total, current) => total + current.coeff, 0)
  // avg = Math.round(avg * 100) / 100

  return (
    <div className={styles.examItem}>
      <Collapse
        title={props.name + ' | Coeff : ' + props.coeff + ' | moyenne : TODO'}
        buttonText='Exporter'
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

export default ExamItem
