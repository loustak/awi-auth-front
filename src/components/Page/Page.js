import React, { useState } from 'react'
import styles from './Page.module.css'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import { Col, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { capitalize } from '../../Utils'

function Page (props) {
  const [sidebarState, setSidebarState] = useState(true)
  const location = props.location.pathname.substring(1) || 'accueil'

  function handleSidebarToggle () {
    setSidebarState(!sidebarState)
  }

  function showLayout () {
    return location !== 'login' && location !== 'register' && location !== 'recovery'
  }

  return (
    showLayout()
      ? <Row noGutters className={styles.page}>
        <Col xs='auto' className='d-none d-lg-block'>
          <Sidebar visible={sidebarState} />
        </Col>
        <Col xs className={styles.colBox}>
          <Row noGutters className={styles.topbarContainer}>
            <Topbar location={capitalize(location)} onSidebarToggle={handleSidebarToggle} />
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

export default withRouter(Page)
