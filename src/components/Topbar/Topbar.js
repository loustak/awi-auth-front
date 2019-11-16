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

function Topbar(props) {
  return (
    <Navbar className={styles.topbar + ' justify-content-between'} collapseOnSelect
            expand={props.expanded ? 'lg' : 'false'} variant='light'>
      <Navbar.Text className={styles.location}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.icon}
          onClick={props.onSidebarToggle}
        />
        <Breadcrumb className={styles.breadcrumb}>
          {
            props.location.pathname !== '/'
              ? props.location.pathname.split('/').splice(1).map((location, i) => {
                return <BreadcrumbItem componentClass='div'>
                  <Link to={'/' + props.location.pathname.split('/').splice(1).slice(0, i + 1).join('/')}>
                    {capitalize(location).toUpperCase()}
                  </Link>
                </BreadcrumbItem>
              })
              : null
          }
        </Breadcrumb>
      </Navbar.Text>
      <Navbar.Toggle className={styles.toggleButton} aria-controls='responsive-navbar-nav'/>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          {
            props.for.role === 'student'
              ? <>
                <NavLink
                  as={NavLink} to='/profil'
                  className={styles.topbarButton + ' d-lg-none'}
                >Profil
                </NavLink>
                <NavLink
                  as={NavLink} to='/applications'
                  className={styles.topbarButton + ' d-lg-none'}
                >Applications
                </NavLink>
                <NavLink
                  as={NavLink} to='/cours'
                  className={styles.topbarButton + ' d-lg-none'}
                >Cours
                </NavLink>
                <NavLink
                  as={NavLink} to='/notes'
                  className={styles.topbarButton + ' d-lg-none'}
                >Notes
                </NavLink>
                <NavLink
                  as={NavLink} to='/simulateur'
                  className={styles.topbarButton + ' d-lg-none'}
                >Simulateur
                </NavLink>
              </>
              : <>
                <NavLink
                  as={NavLink} to='/dashboard'
                  className={styles.topbarButton + ' d-lg-none'}
                >Dashboard
                </NavLink>
                <NavLink
                  as={NavLink} to='/stats'
                  className={styles.topbarButton + ' d-lg-none'}
                >Stats
                </NavLink>
              </>
          }
          <NavLink as={NavLink} to='/login' className={styles.topbarButton}>Déconnexion</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Topbar)
