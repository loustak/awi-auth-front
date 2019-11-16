import React from 'react'
import styles from './Sidebar.module.css'
import SidebarButton from '../SidebarButton/SidebarButton'
import { NavLink } from 'react-router-dom'

function Sidebar (props) {
  return (
    <>
      <div className={styles.sidebar + ' d-none d-md-block'}>
        <div className='Sidebar-top'>
          <div id={styles.logoTop} className='clickable' as={NavLink} to='/' style={{height: '200px'}}>
            <NavLink to='/'>
              <img src='' alt='' />
            </NavLink>
          </div>
          <div className={styles.navigation}>
            <SidebarButton name='Application' to='/applications' />
            <SidebarButton name='Cours' to='/cours' />
            <SidebarButton name='Notes' to='/notes' />
            <SidebarButton name='Simulateur' to='/simulateur' />
            <SidebarButton name='Dashboard' to='/dashboard' />
            <SidebarButton name='Stats' to='/stats' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
