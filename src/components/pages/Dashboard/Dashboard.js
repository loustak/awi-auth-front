import React from 'react'
import Dashboard from '../../Dashboard/Dashboard'
import * as test from '../../../services/apiFormatechService'

class DashboardPage extends React.Component {
  render () {
    return (
      <>
        {test.test()}
        <Dashboard />
      </>
    )
  }
}

export default DashboardPage
