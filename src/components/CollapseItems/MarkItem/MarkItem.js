import React from 'react'
import styles from './Marktem.module.css'
import { connect } from 'react-redux'

function MarkItem(props) {

  //-----------------------------VARIABLES-------------------------------------

  const student = props.students.students.filter(s => s.id === props.student)[0]


  //-----------------------------RETURN-------------------------------------

  return (
    <div className={styles.markItem}>
      <div>
        {student.lastName} {student.firstName}
      </div>
      <div>
        Note: {isNaN(props.mark)  ? 'Non noté' : props.mark }
      </div>
    </div>
  )
}

//-----------------------------SATEMAP-------------------------------------

const stateMap = (state) => {
  return {
    students: state.students
  }
}

export default connect(stateMap)(MarkItem)
