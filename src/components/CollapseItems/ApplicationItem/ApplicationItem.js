import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
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
    <div className={styles.applicationItem} title={props.link_app}>
      <div className={styles.applicationName}>{props.name_app}</div>
      <div className={styles.applicationDescription}>{props.description_app}</div>
      <div className={styles.applicationCreator}>Par {appCreator}</div>
      <FontAwesomeIcon className={styles.applicationDelete} icon={faTimes} onClick={showConfirmDelete} />
    </div>
  )
}

const stateMap = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(stateMap)(ApplicationItem)
