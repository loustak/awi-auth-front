import React from 'react'
import styles from './Marktem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function MarkItem(props) {
  return (
    <div className={styles.markItem}>
      <div>
        Note: {props.mark.mark}
      </div>
      <div>
        Coeff: {props.mark.coeff}
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        Exam: {props.mark.exam}
      </div>
      <div style={{justifySelf: 'center'}}>
        <FontAwesomeIcon
          icon={faTimes}
          className='clickable'
        />
      </div>
    </div>
  )
}

export default MarkItem
