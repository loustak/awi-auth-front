import React from 'react'
import styles from './Sidebar.module.css'
import SidebarButton from '../SidebarButton/SidebarButton'
import { NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { setCurrentUserRole } from '../../store/actions/currentUser.action'

function Sidebar(props) {
  return (
    <>
      <div className={styles.sidebar + ' d-none d-md-block'}>
        <div className='Sidebar-top'>
          <div className={styles.picture}>
            <Image src={props.for.picture} roundedCircle fluid />
          </div>
          <div className={styles.navigation}>
            <div style={{color: 'white'}} onClick={() => setCurrentUserRole('student')}>Student</div>
            <div style={{color: 'white'}} onClick={() => setCurrentUserRole('teacher')}>Teacher</div>
            {
              props.for.role === 'student'
                ? <>
                  <SidebarButton name='Application' to='/applications'/>
                  <SidebarButton name='Cours' to='/cours'/>
                  <SidebarButton name='Notes' to='/notes'/>
                  <SidebarButton name='Simulateur' to='/simulateur'/>
                </>
                : <>
                  <SidebarButton name='Dashboard' to='/dashboard'/>
                  <SidebarButton name='Stats' to='/stats'/>
                </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
