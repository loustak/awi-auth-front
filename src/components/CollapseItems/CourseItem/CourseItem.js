import React from 'react'
import styles from './CourseItem.module.css'

function CourseItem (props) {

  //-----------------------------RETURN-------------------------------------

  return (
    <div className={styles.courseItem}>
      <div className={styles.varInfo}>
        {
          props.credit
            ? <><p>ECTS : <span className={styles.variable}>{props.credit}</span></p></>
            : <p>ETCS: <span className={styles.variable}>--</span></p>
        }
      </div>
      <div className={styles.varInfo}>
        {
          props.hours
            ? <p>Heures : <span className={styles.variable}>{props.hours}h</span></p>
            : null
        }
      </div>
      <div className={styles.varInfo}>
        {
          props.description
            ? <p>Description : <span className={styles.variable}>{props.description}</span></p>
            : <p>Description : <span className={styles.variable}>--</span></p>
        }
      </div>
      <div className={styles.varInfo}>
        {
          props.content
            ? <p>Contenu : <span className={styles.variable}>{props.content}</span></p>
            : <p>Contenu : <span className={styles.variable}>--</span></p>
        }
      </div>
    </div>
  )
}

export default CourseItem
