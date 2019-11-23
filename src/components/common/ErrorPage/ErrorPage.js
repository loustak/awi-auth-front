import React from 'react'
import styles from './ErrorPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function ErrorPage (props) {
  // -----------------------------RETURN-------------------------------------

  return (
    <div className={styles.errorContainer}>
      <FontAwesomeIcon
        icon={faTimes}
        className={styles.errorImage}
      />
      <div className={styles.errorTextContainer}>
        <div className={styles.errorText}>Erreur</div>
        <div>{props.errorMessage}</div>
      </div>
    </div>
  )
}

export default ErrorPage
