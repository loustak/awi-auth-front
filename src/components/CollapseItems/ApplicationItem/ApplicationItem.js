import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ApplicationItem.module.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function ApplicationItem (props) {
  const [showM, setShow] = useState(false)
  const title = `Supprimer ${props.name}`
  const content = `Êtes vous sûr de vouloir supprimer ${props.name} de votre liste d'Applications ?`

  return (
    <div className={styles.applicationItem} title={props.url}>
      <div className={styles.applicationName}>{props.name}</div>
      <FontAwesomeIcon className={styles.applicationDelete} icon={faTimes} onClick={() => setShow(!showM)}/>
      <Modal
        title={title}
        content={content}
        show={showM}
        addButton
        nameButton='Supprimer'
        onClick={() => setShow(!showM)}
      />
    </div>
  )
}

export default ApplicationItem
