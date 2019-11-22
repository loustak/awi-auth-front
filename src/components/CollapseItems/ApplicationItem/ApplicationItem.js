import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ApplicationItem.module.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { capitalize } from '../../../Utils'
import { connect } from 'react-redux'
import { deleteUserApp } from '../../../services/castelstoreService'
import classNames from 'classnames'

function ApplicationItem (props) {

  //-----------------------------VARIABLES-------------------------------------

  const content = `Êtes vous sûr de vouloir supprimer ${props.name_app} de votre liste d'Applications ?`
  const appCreator = props.name_user.split('.').map(n => n.split('-').map(nn => capitalize(nn)).join('-')).join(' ')

  //-----------------------------FUNCTIONS-------------------------------------

  function showConfirmDelete () {
    if (window.confirm(content)) {
      const username = props.currentUser.user.firstname + '.' + props.currentUser.user.lastname
      deleteUserApp(username, props.id_app).then(() => props.onDelete())
    }
  }

  //-----------------------------RETURN-------------------------------------

  return (
    <>
      {
        props.link_app !== ''
          ? <div className={styles.applicationItem}>
            <div className={styles.itemTop}>
              <FontAwesomeIcon className={styles.applicationDelete} icon={faTimes} onClick={showConfirmDelete} />
            </div>
            <div className={styles.itemBody}>
              <a href={props.link_app} target='_blank' rel='noreferrer noopener'
                 className={classNames({ [styles.link]: true, [styles.applicationName]: true })}>
                {props.name_app}
              </a>

              <div className={styles.applicationDescription}>{props.description_app}</div>
              <div className={styles.applicationCreator}>Par {appCreator}</div>
            </div>
          </div>
          : <div className={styles.applicationItem}>
            <div className={styles.itemTop}>
              <FontAwesomeIcon className={styles.applicationDelete} icon={faTimes} onClick={showConfirmDelete} />
            </div>
            <div className={styles.itemBody}>
              <div className={classNames({ [styles.link]: false, [styles.applicationName]: true })}>
                {props.name_app}
              </div>

              <div className={styles.applicationDescription}>{props.description_app}</div>
              <div className={styles.applicationCreator}>Par {appCreator}</div>
            </div>
          </div>
      }
    </>
  )
}

//-----------------------------SATEMAP-------------------------------------

const stateMap = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(stateMap)(ApplicationItem)
