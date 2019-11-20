import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import classNames from 'classnames'

import styles from './Topbar.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { auth } from '../../services/oauth2Service'
import { logout } from '../../services/AuthenticationService'
import { connect } from 'react-redux'
import { capitalize } from '../../Utils'

function Topbar (props) {

  function handleLogout () {
    logout()
    window.location.href = auth.code.getUri()
  }

  return (
    <Navbar
      className={styles.topbar + ' justify-content-between'}
      collapseOnSelect
      expand='md'
      variant='dark'
      sticky='top'
    >
      <img src={'/logoMyDash.svg'} alt='MyDash logo' className={styles.logo} />
      <Navbar.Toggle className={styles.toggleButton} aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          {
            props.for.role === 'student'
              ? <>
                <Nav.Link as={NavLink} className={classNames({
                  [styles.topBarLink]: true,
                  [styles.current]: props.location.pathname === '/applications'
                })} to="/applications">APPLICATION</Nav.Link>
                <Nav.Link as={NavLink} className={classNames({
                  [styles.topBarLink]: true,
                  [styles.current]: props.location.pathname === '/cours'
                })} to="/cours">COURS</Nav.Link>
                <Nav.Link as={NavLink} className={classNames({
                  [styles.topBarLink]: true,
                  [styles.current]: props.location.pathname === '/simulateur'
                })} to="/simulateur">SIMULATEUR</Nav.Link>
              </>
              : <>
                <><Nav.Link as={NavLink} className={styles.topBarLink} to="/dashboard">DASHBOARD</Nav.Link></>
              </>
          }
        </Nav>
        <Nav>
          {
            props.currentUser.user
              ? <div
                style={{
                  color: '#00ABB2',
                  marginRight: '30px'
                }}>
                {capitalize(props.currentUser.user.firstname)} {props.currentUser.user.lastname.toUpperCase()}
              </div>
              : null
          }
          <div onClick={handleLogout} className={styles.topbarButton}>Déconnexion</div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const stateMap = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(stateMap)(withRouter(Topbar))
