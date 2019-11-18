import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './Topbar.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { capitalize } from '../../Utils'
import { setCurrentUserRole } from '../../store/actions/currentUser.action'

function Topbar (props) {
  return (
    <Navbar className={styles.topbar + ' justify-content-between'} collapseOnSelect expand={props.expanded ? 'md' : 'false'} variant='dark' sticky="top">

      <Navbar.Toggle className={styles.toggleButton} aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          {
            props.for.role === 'student'
              ? <>
                <Nav.Link as={NavLink} className={classNames({[styles.topBarLink]: true, [styles.current]: props.location.pathname === '/applications'})} to="/applications">APPLICATION</Nav.Link>
                <Nav.Link as={NavLink} className={classNames({[styles.topBarLink]: true, [styles.current]: props.location.pathname === '/cours'})} to="/cours">COURS</Nav.Link>
                <Nav.Link as={NavLink} className={classNames({[styles.topBarLink]: true, [styles.current]: props.location.pathname === '/simulateur'})} to="/simulateur">SIMULATEUR</Nav.Link>
              </>
              : <>
                <><Nav.Link as={NavLink} className={styles.topBarLink} to="/dashboard">DASHBOARD</Nav.Link></>
              </>
          }
          <Nav.Link style={{ color: '#00ABB2' }} onClick={() => setCurrentUserRole('student')}>Student</Nav.Link>
          <Nav.Link style={{ color: '#00ABB2' }} onClick={() => setCurrentUserRole('teacher')}>Teacher</Nav.Link>
        </Nav>
        <Nav>
          <NavLink as={NavLink} to='/login' className={styles.topbarButton}>Déconnexion</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Topbar)
