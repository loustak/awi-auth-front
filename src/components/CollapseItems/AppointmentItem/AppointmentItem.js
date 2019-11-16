import React from 'react'
import styles from './AppointmentItem.module.css'
import Button from '../../Button/Button'

function AppointmentItem (props) {
  return (
    <div className={styles.appointmentItem}>
      <div className={styles.left}>
        {props.name}
      </div>
      <div className={styles.right}>
        <Button shape='round'>Voir</Button>
      </div>
    </div>
  )
}

export default AppointmentItem
