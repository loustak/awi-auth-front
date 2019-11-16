import React from 'react'
import styles from './ApplicationItem.module.css'

function ApplicationItem(props) {
  const color = props.status === 'VALIDE' ? '#50BC5C' : props.status === 'ATTENTE' ? '#ff961c' : '#de3b2f'

  return (
    <div className={styles.applicationItem}>
      <div className={styles.left}>
        {props.name}
      </div>
      <div className={styles.right}>
        <p>Statut : <span className={styles.status} style={{ color: color }}>{props.status}</span></p>
      </div>
    </div>
  )
}

export default ApplicationItem
