import React from 'react'
import '../../styles/App.css'
import MenuHeader from '../common/MenuHeader.js'
import UserApps from '../UserApps'
import { Divider, Responsive, Segment, Tab } from 'semantic-ui-react'
import StudentGeneralInfos from '../StudentGeneralInfos'
import TeacherStudentList from '../TeacherStudentList'
import StudentModules from '../StudentModules'

const studentTabs = [
  { menuItem: 'General Infos', render: () => <Tab.Pane><StudentGeneralInfos /></Tab.Pane> },
  { menuItem: 'My modules', render: () => <Tab.Pane><StudentModules /></Tab.Pane> }
]

const teacherTabs = [
  { menuItem: 'General Infos', render: () => <Tab.Pane>TO DO</Tab.Pane> },
  { menuItem: 'My students', render: () => <Tab.Pane><TeacherStudentList /></Tab.Pane> }
]

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        sferg
      </div>
    )
  }
}

export default Dashboard
