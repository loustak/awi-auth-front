import React, { useState } from 'react'
import styles from './RecommendationItem.module.css'
import Button from '../../Button/Button'
import Modal from '../../Modal/Modal'

function RecommendationItem(props) {
  const [showM, setShow] = useState(false)

  return (
    <div className={styles.recommendationItem}>
      <div className={styles.left}>
        {props.name}
      </div>
      <div className={styles.right}>
        {
          !props.hidden
            ? <> <Button shape='round' onClick={() => setShow(!showM)}>
              Voir
            </Button>
            <Modal title='Lettre de Recommandation' content='content test' show={showM} onClick={() => setShow(!showM)}/>
            </>
            : null
        }
      </div>
    </div>
  )
}

export default RecommendationItem
