import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import OauthLogin from './components/LoginOAuth/Login'
import Login from './components/pages/Login/Login'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/pages/Dashboard/Dashboard'
import './App.css'
import Page from './components/Page/Page'
import store from './store/store'
import Applications from './components/pages/Applications/Applications'
import AddMarkPage from './components/pages/AddMark/AddMark'
import Courses from './components/pages/Courses/Courses'
import { isAuthenticated } from './services/AuthenticationService'
import { auth } from './services/oauth2Service'

export class AbsoluteRedirect extends React.Component {
  componentDidMount () {
    window.location = this.props.to
  }

  render () {
    return null
  }
}


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => (
    isAuthenticated('any')
      ? <Component {...props} {...rest} />
      : <AbsoluteRedirect to={auth.code.getUri()} />
  )}
  />
)

const StudentRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => (
    isAuthenticated('student')
      ? <Component {...props} {...rest} />
      : <AbsoluteRedirect to={auth.code.getUri()} />
  )}
  />
)

const TeachereRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => (
    isAuthenticated('teacher')
      ? <Component {...props} {...rest} />
      : <AbsoluteRedirect to={auth.code.getUri()} />
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
            <NonAuthenticatedRoute exact path='/login' component={OauthLogin} />
            <NonAuthenticatedRoute exact path='/token' component={Login} />
            <StudentRoute exact path='/applications' component={Applications} />
            <StudentRoute exact path='/cours' component={Courses} />
            <TeachereRoute exact path='/dashboard' component={Dashboard} />
            <TeachereRoute exact path='/notes' component={AddMarkPage} />
          </Page>
        </div>
      </Provider>
    </Router>
  )
}

export default App
