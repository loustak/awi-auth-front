import React from 'react'
import logo from './assets/logo.svg'
import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'
import Login from './components/pages/Login'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { isAuthenticated } from './services/authenticationService'
import Dashboard from './components/pages/Dashboard'
import DashboardTeacher from './components/pages/DashboardTeacher'

import './App.css'

import Page from './components/Page/Page'
// import Home from './components/pages/Home/Home'
// import Profile from './components/pages/Profile/Profile'
import store from './store/store'
import Applications from './components/pages/Applications/Applications'
import Courses from './components/pages/Courses/Courses'
import Marks from './components/pages/Marks/marks'

// eslint-disable-next-line no-unused-vars
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => (
      isAuthenticated()
        ? <Component {...props} {...rest} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}
  />
)

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => (
      <Component {...props} {...rest} />
    )}
  />
)

const NonAuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => (
      isAuthenticated()
        ? <Redirect to={{ pathname: '/' }} />
        : <Component {...props} {...rest} />
    )}
  />
)

function App () {
  return (
    <Router>
      <Provider store={store}>
        <div className='App'>
          <Page>
            <NonAuthenticatedRoute exact path='/login' component={Login} />
            <PublicRoute exact path='/student' component={Dashboard} />
            <PublicRoute exact path='/teacher' component={DashboardTeacher} />
            <PublicRoute exact path='/applications' component={Applications} />
            <PublicRoute exact path='/cours' component={Courses} />
            <PublicRoute exact path='/notes' component={Marks} />
          </Page>
        </div>
      </Provider>
    </Router>
  )
}

export default App
