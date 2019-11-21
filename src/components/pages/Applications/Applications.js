import React from 'react'
import Collapse from '../../Collapse/Collapse'
import ApplicationItem from '../../CollapseItems/ApplicationItem/ApplicationItem'
import EmptyItem from '../../CollapseItems/EmptyItem/EmptyItem'
import Form from 'react-bootstrap/Form'
import styles from './Applications.module.css'
import { getUserApps } from '../../../services/castelstoreService'

const recentApps = [
  { name: 'PolyTeach', url: 'url' },
  { name: 'Prello', url: 'url' },
  { name: 'PolytechRecutement', url: 'url' }
]

const apps = [
  { name: 'PolyTeach', url: 'url' },
  { name: 'Prello', url: 'url' },
  { name: 'PolytechRecutement', url: 'url' },
  { name: 'Castellstore', url: 'url' },
  { name: 'Facebook', url: 'url' },
  { name: 'WaveIT', url: 'url' },
  { name: 'App5', url: 'url' },
  { name: 'App6', url: 'url' },
  { name: 'App7', url: 'url' },
  { name: 'App8', url: 'url' },
  { name: 'App9', url: 'url' }
]

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
