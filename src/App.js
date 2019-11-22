import React, { useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
import OauthLogin from './components/LoginOAuth/Login'
import Login from './components/pages/Login/Login'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/pages/Dashboard/Dashboard'
import './App.css'
import Page from './components/Page/Page'
import store from './store/store'
import Applications from './components/pages/Applications/Applications'
import AddMarkPage from './components/pages/AddMark/AddMark'
import Courses from './components/pages/Courses/Courses'
import { isAuthenticated, isAuthenticatedAs, logout, setProfile } from './services/AuthenticationService'
import Simulator from './components/pages/Simulator/Simulator'
import { auth } from './services/oauth2Service'
import ErrorPage from './components/common/ErrorPage/ErrorPage'

export class AbsoluteRedirect extends React.Component {
  componentDidMount () {
    window.location = this.props.to
  }

  render () {
    return null
  }
}

const RedirectToHome = ({ ...rest }) => {
  return <Route
    {...rest}
    render={() => (
      !isAuthenticated()
        ? <AbsoluteRedirect to={auth.code.getUri()} />
        : (isAuthenticatedAs() === 'student'
          ? <Redirect to='/applications' />
          : <Redirect to='/dashboard' />
        )
    )}
  />
}

// class StudentRoute extends React.Component {
//   componentDidMount () {
//     if (!isAuthenticatedAs('student')) {
//       console.log('logout student')
//       logout()
//       window.location.href = auth.code.getUri()
//     }
//   }
//
//   render () {
//     const Component = this.props.component
//
//     return (
//       <Route
//         exact={this.props.exact}
//         path={this.props.path}
//         render={props => {
//           return <Component {...this.props} />
//         }}
//       />
//     )
//   }
// }

// class TeacherRoute extends React.Component {
//   componentDidMount () {
//     if (!isAuthenticatedAs('teacher')) {
//       console.log('logout student')
//       logout()
//       window.location.href = auth.code.getUri()
//     }
//   }
//
//   render () {
//     const Component = this.props.component
//
//     return (
//       <Route
//         exact={this.props.exact}
//         path={this.props.path}
//         render={props => {
//           return <Component {...this.props} />
//         }}
//       />
//     )
//   }
// }

const StudentRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthenticatedAs('student')) {
        logout()
      }

      return isAuthenticated('student')
        ? <Component {...props} {...rest} />
        : <AbsoluteRedirect to={auth.code.getUri()} />
    }}
  />
)

const TeacherRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthenticatedAs('teacher')) {
        logout()
      }

      return isAuthenticated('teacher')
        ? <Component {...props} {...rest} />
        : <AbsoluteRedirect to={auth.code.getUri()} />
    }}
  />
)

// const PublicRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => (
//       <Component {...props} {...rest} />
//     )}
//   />
// )

const NonAuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated() && new URLSearchParams(props.location.search).get('redirect_uri').match('mydash.igpolytech.fr')
        ? <Redirect to={{ pathname: '/' }} />
        : <Component {...props} {...rest} />
    )}
  />
)

function Oups (props) {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ErrorPage errorMessage="La page que vous avez demandée n'est pas accessible !" />
    </div>
  )
}

function App () {
  useEffect(() => {
    setProfile()
  }, [])

  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className='App'>
            <Page>
              <NonAuthenticatedRoute exact path='/login' component={OauthLogin} />
              <StudentRoute exact path='/applications' component={Applications} />
              <StudentRoute exact path='/cours' component={Courses} />
              <StudentRoute exact path='/simulateur' component={Simulator} />
              <TeacherRoute exact path='/dashboard' component={Dashboard} />
              <TeacherRoute exact path='/notes' component={AddMarkPage} />
              <RedirectToHome exact path='/' />
              <NonAuthenticatedRoute exact path='/token' component={Login} />
              <Route component={Oups} />
            </Page>
          </div>
        </Provider>
      </Switch>
    </Router>
  )
}

export default App
