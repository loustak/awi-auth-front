import React from 'react'
import styles from './Page.module.css'
import Topbar from '../Topbar/Topbar'
import { Col, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function Page (props) {

  //-----------------------------VARIABLES-------------------------------------

  const location = props.location.pathname.substring(1)

  //-----------------------------FUNCTIONS-------------------------------------

  function showLayout () {
    return location === 'applications' || location === 'agenda' || location === 'cours' || location === 'simulateur' || location === 'dashboard' || location === 'notes'
  }

  //-----------------------------RETURN-------------------------------------

  return (
    showLayout()
      ? <Row noGutters className={styles.page}>

        <Col xs className={styles.colBox}>
          <Row noGutters className={styles.topbarContainer}>
            <Topbar
              for={props.currentUser.user || 'none'}
            />
          </Row>
          <Row noGutters className={styles.pageContentWrapper}>
            <div className={styles.pageContent}>
              {props.children}
            </div>
          </Row>
        </Col>
      </Row>
      : <div className='PageContent'>
        {props.children}
      </div>
  )
}

//-----------------------------STATEMAP-------------------------------------

const stateMap = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(stateMap)(withRouter(Page))
