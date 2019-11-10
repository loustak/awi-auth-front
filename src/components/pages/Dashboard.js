import React from 'react'
import '../../styles/App.css'
import MenuHeader from '../common/MenuHeader.js'
import UserApps from '../UserApps'
import { Divider, Segment } from 'semantic-ui-react'

const Dashboard = () => {
  return (
    <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 300, padding: '2em 2em' }}
    >

      <MenuHeader />
      <Divider hidden />
      <UserApps />

    </Segment>
  )
}

export default Dashboard
