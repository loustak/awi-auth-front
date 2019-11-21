import React from 'react'
import styles from './EmptyItem.module.css'

function EmptyItem (props) {
  return (
    <div className={styles.emptyItem}>
      <div className={styles.left}>
        {props.message ? props.message : 'Rien à afficher'}
      </div>
      <div className={styles.right} />
    </div>
  )
}

export default EmptyItem
