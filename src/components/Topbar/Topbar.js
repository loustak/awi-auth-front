import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

import styles from './Topbar.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { capitalize } from '../../Utils'

function Topbar (props) {
  return (
    <Navbar className={styles.topbar + ' justify-content-between'} collapseOnSelect expand='lg' variant='dark'>
      <Navbar.Text className={styles.location}>
        <Breadcrumb className={styles.breadcrumb}>
          <BreadcrumbItem componentClass='div'><Link to='/'>ACCUEIL</Link></BreadcrumbItem>
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
      <Navbar.Toggle className={styles.toggleButton} aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <NavLink as={NavLink} to='/profil' className={styles.topbarButton}>
            <div>LOGOUT</div>
          </NavLink>
          <NavLink
            as={NavLink} to='/candidatures'
            className={styles.topbarButton + ' d-lg-none'}
          >Candidatures
          </NavLink>
          <NavLink
            as={NavLink} to='/recommandations'
            className={styles.topbarButton + ' d-lg-none'}
          >Recommandations
          </NavLink>
          <NavLink as={NavLink} to='/calendrier' className={styles.topbarButton + ' d-lg-none'}>Calendrier</NavLink>
          <NavLink as={NavLink} to='/messages' className={styles.topbarButton + ' d-lg-none'}>Messages</NavLink>
          <NavLink as={NavLink} to='/connexion' className={styles.topbarButton + ' d-lg-none'}>Déconnexion</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Topbar)
