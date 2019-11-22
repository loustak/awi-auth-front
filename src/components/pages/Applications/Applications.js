import React from 'react'
import ApplicationItem from '../../CollapseItems/ApplicationItem/ApplicationItem'
import styles from './Applications.module.css'
import { getUserApps } from '../../../services/castelstoreService'
import EmptyItem from '../../CollapseItems/EmptyItem/EmptyItem'
import classNames from 'classnames/bind';

class Applications extends React.Component {

  //-----------------------------FUNCTIONS-------------------------------------

  constructor (props) {
    super(props)
    this.state = { apps: [] }
    this.getApps = this.getApps.bind(this)
  }

  componentDidMount () {
    this.getApps()
  }

  getApps () {
    getUserApps().then(res => {
      this.setState({ apps: res })
    })
  }

  //-----------------------------RETURN-------------------------------------

  render () {
    return (
      <><h4 className={classNames({ [styles.applications]: true, [styles.title]: true})}>Vos applications téléchargées depuis le <a className={styles.link} href={'https://castelstore.igpolytech.fr/'} target='_blank' rel='noreferrer noopener' > CastelStore</a></h4>
      <div className={styles.applications}>
        {
          this.state.apps.length > 0 ?
             this.state.apps.map((app, i) => (
              <ApplicationItem {...app} onDelete={() => this.getApps()} key={i} />
            ))
            : <EmptyItem message={"Vous n'avez aucune application dans votre board"}/>
        }
      </div>
      </>
    )
  }
}

export default Applications
