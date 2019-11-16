import React from 'react'
import styles from './Marktem.module.css'
import Collapse from '../../Collapse/Collapse'

function MarkItem(props) {
  return (
    <div className={styles.markItem}>
      <div>
        Note: {props.mark.mark}
      </div>
      <div>
        Coeff: {props.mark.coeff}
      </div>
      <div>
        Exam: {props.mark.exam}
      </div>
    </div>
  )
}

export default MarkItem
