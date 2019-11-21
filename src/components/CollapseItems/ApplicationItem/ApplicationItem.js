import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ApplicationItem.module.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { capitalize } from '../../../Utils'
import { connect } from 'react-redux'
import { deleteUserApp } from '../../../services/castelstoreService'

function ApplicationItem (props) {
  const content = `Êtes vous sûr de vouloir supprimer ${props.name_app} de votre liste d'Applications ?`

  const appCreator = props.name_user.split('.').map(n => n.split('-').map(nn => capitalize(nn)).join('-')).join(' ')

  function showConfirmDelete () {
    if (window.confirm(content)) {
      const username = props.currentUser.user.firstname + '.' + props.currentUser.user.lastname
      deleteUserApp(username, props.id_app).then(() => props.onDelete())
    }
  }

  return (
    <a href={props.link_app} target='_blank' rel='noreferrer noopener' className={styles.applicationItem}>
      <div className={styles.applicationName}>{props.name_app}</div>
      <div className={styles.applicationDescription}>{props.description_app}</div>
      <div className={styles.applicationCreator}>Par {appCreator}</div>
      <FontAwesomeIcon className={styles.applicationDelete} icon={faTimes} onClick={showConfirmDelete} />
    </a>
  )
}

const stateMap = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(stateMap)(ApplicationItem)
