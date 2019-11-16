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
            <SidebarButton name='S Applications' to='/candidatures' />
            <SidebarButton name='S Cours' to='/recommandations' />
            <SidebarButton name='S Notes' to='/calendrier' />
            <SidebarButton name='S Simulateur' to='/messages' />
            <SidebarButton name='T Cours' to='/messages' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
