import React from 'react'
import styles from './Page.module.css'
import Topbar from '../Topbar/Topbar'
import { Col, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function Page (props) {
  const location = props.location.pathname.substring(1)
  function showLayout () {
    return location !== 'login' && location !== 'register' && location !== 'recovery' && location !== 'connexion'
  }

  return (
    showLayout()
      ? <Row noGutters className={styles.page}>

        <Col xs className={styles.colBox}>
          <Row noGutters className={styles.topbarContainer}>
            <Topbar
              for={props.currentUser.user}
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

const stateMap = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(stateMap)(withRouter(Page))
