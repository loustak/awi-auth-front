import React from 'react'
import ApplicationItem from '../../CollapseItems/ApplicationItem/ApplicationItem'
import styles from './Applications.module.css'
import { getUserApps } from '../../../services/castelstoreService'

class Applications extends React.Component {

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
      console.log(res)
      this.setState({ apps: res })
    })
  }

  render () {
    return (
      <div className={styles.applications}>
        {
          this.state.apps.map((app, i) => (
            <ApplicationItem {...app} onDelete={() => this.getApps()} key={i} />
          ))
        }
      </div>
    )
  }
}

export default Applications
