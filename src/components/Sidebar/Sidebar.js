import React from 'react'
import styles from './Sidebar.module.css'
import SidebarButton from '../SidebarButton/SidebarButton'
import { NavLink } from 'react-router-dom'

function Sidebar (props) {
  return (
    <>
      <div className={styles.sidebar + ' d-none d-md-block'}>
        <div className='Sidebar-top'>
          <div id='logo-container' className='clickable' as={NavLink} to='/'>
            <NavLink to='/'>
              <img src='https://poly-recrute.igpolytech.fr/logo.png' alt='logo' />
            </NavLink>
          </div>
          <div className={styles.navigation}>
            <SidebarButton name='Application' to='/Application' />
            <SidebarButton name='Cours' to='/recommandations' />
            <SidebarButton name='Notes' to='/calendrier' />
            <SidebarButton name='Simulateur' to='/messages' />
          </div>
        </div>
        <div className={styles.sidebarBottom}>
          <SidebarButton name='Déconnexion' to='/connexion' variant='exit' />
        </div>
      </div>
    </>
  )
}

export default Sidebar
