import React from 'react'
import styles from './EmptyItem.module.css'
import Button from '../../Button/Button'

function EmptyItem(props) {
  return (
    <div className={styles.emptyItem}>
      <div className={styles.left}>
        Rien à afficher
      </div>
      <div className={styles.right}>
      </div>
    </div>
  )
}

export default EmptyItem
