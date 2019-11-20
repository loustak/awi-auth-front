import React from 'react'
import styles from './Marktem.module.css'
import { connect } from 'react-redux'

function MarkItem(props) {
  const student = props.students.students.filter(s => s.id === props.student)[0]

  return (
    <div className={styles.markItem}>
      <div>
        {props.student}
      </div>
      <div>
        {student.lastName} {student.firstName}
      </div>
      <div>
        Note: {props.mark || 'Non noté'}
      </div>
    </div>
  )
}

const stateMap = (state) => {
  return {
    students: state.students
  }
}

export default connect(stateMap)(MarkItem)
