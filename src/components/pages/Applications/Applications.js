import React from 'react'
import Collapse from '../../Collapse/Collapse'
import ApplicationItem from '../../CollapseItems/ApplicationItem/ApplicationItem'
import EmptyItem from '../../CollapseItems/EmptyItem/EmptyItem'
import Form from 'react-bootstrap/Form'
import styles from './Applications.module.css'

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
  render () {
    return (
      <div className='applicationItem'>
        <Collapse title='Récemment ouvertes'>
          <div className={styles.appsContainer}>
            {
              recentApps.length > 0
                ? recentApps.map((app, i) =>
                  <ApplicationItem name={app.name} status={app.url} key={i} />
                )
                : <EmptyItem />
            }
          </div>
        </Collapse>
        <br />
        <Collapse title='Toutes les applications'>
          {
            apps.length > 0
              ? <Form.Control
                type='text'
                placeholder='Rechercher'
                className={styles.searchInput}
                // onChange={e => setSearch(e.target.value.toLowerCase())}
              />
              : null
          }
          <div className={styles.appsContainer}>
            {
              apps.filter(app => app.name.toLowerCase().includes('search')).map((app, i) => // TODO
                <div key={i}>
                  <div />
                  <div>
                    <div>{app.name}</div>
                    <div>{app.url}</div>
                  </div>
                </div>
              )
            }
            {
              apps.length > 0
                ? apps.map((app, i) =>
                  <ApplicationItem name={app.name} url={app.url} key={i} />
                )
                : <EmptyItem />
            }
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Applications
