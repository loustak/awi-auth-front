import React, {useState} from 'react'
import styles from './CourseItem.module.css'

function CourseItem (props) {
  function downloadCourse(index) {
    console.log('TODO')
    console.log(index)
    // TODO
  }

  return (
    <div className={styles.courseItem}>
      <div className={styles.hours}>
        {
          props.hours
          ? <p>Hours : {props.hours}</p>
          : null
        }
      </div>
      <div className={styles.hours}>
        {
          props.coef
            ? <p>Coefficient : {props.coef}</p>
            : null
        }
      </div>
      <div className={styles.info}>
        <div id={styles.description}>
              <label>DESCRIPTION</label>
          {
            props.description
              ? <p>{props.description}</p>
              : <p>--</p>
          }
        </div>
      </div>
    </div>
  )
}

export default CourseItem
