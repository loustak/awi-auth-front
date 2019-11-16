import React from 'react'
import styles from './StudentItem.module.css'
import Collapse from '../../Collapse/Collapse'
import MarkItem from '../MarkItem/MarkItem'

function StudentItem(props) {
  return (
    <div className={styles.studentItem}>
      <Collapse
        title={props.name}
        buttonText='Ajouter une note'
      >
        {
          props.marks.map((mark, i) =>
            <MarkItem
              mark={mark}
              key={i}
            />
          )
        }
      </Collapse>
    </div>
  )
}

export default StudentItem
