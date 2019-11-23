import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from './Agenda.module.css'

function Agenda (props) {


  function getURI () {
    const upperCaseSection = props.currentUser.user.section.toUpperCase()
    const iframeUri = `https://wave-it.fr/polytech/${upperCaseSection}`
    return iframeUri
  }

  //-----------------------------RETURN-------------------------------------

  if (!props.currentUser.fetched) {
    return null
  }

  return (
    <iframe
      className={styles.frame}
      src={getURI()}
      frameBorder="0"
      seamless>
    </iframe>
  )
}

//-----------------------------STATEMAP-------------------------------------

const stateMap = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(stateMap)(withRouter(Agenda))