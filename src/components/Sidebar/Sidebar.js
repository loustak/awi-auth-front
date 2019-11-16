import React from 'react'
import styles from './Sidebar.module.css'
import SidebarButton from '../SidebarButton/SidebarButton'
import { Image } from 'react-bootstrap'
import { setCurrentUserRole } from '../../store/actions/currentUser.action'
import { faTachometerAlt, faChartBar, faGraduationCap, faFolderOpen, faRocket, faThList } from '@fortawesome/free-solid-svg-icons'

function Sidebar (props) {
  return (
    <div className={styles.sidebar + ' d-none d-md-block'}>
      <div className='Sidebar-top'>
        <div className={styles.picture}>
          <Image src={props.for.picture} roundedCircle fluid />
        </div>
        <div className={styles.navigation}>
          <div style={{ color: 'white' }} onClick={() => setCurrentUserRole('student')}>Student</div>
          <div style={{ color: 'white' }} onClick={() => setCurrentUserRole('teacher')}>Teacher</div>
          {
            props.for.role === 'student'
              ? <>
                <SidebarButton name='Application' to='/applications' icon={faThList} />
                <SidebarButton name='Cours' to='/cours' icon={faFolderOpen} />
                <SidebarButton name='Notes' to='/notes' icon={faGraduationCap} />
                <SidebarButton name='Simulateur' to='/simulateur' icon={faRocket} />
              </>
              : <>
                <SidebarButton name='Dashboard' to='/dashboard' icon={faTachometerAlt} />
                <SidebarButton name='Stats' to='/stats' icon={faChartBar} />
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
