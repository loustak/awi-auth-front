import React from 'react'
import logo from './assets/logo.svg'
import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'
import Login from './components/pages/Login'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { isAuthenticated } from './services/authenticationService'

import './App.css'

import Page from './components/Page/Page'
// import Home from './components/Pages/Home/Home'
// import Profile from './components/Pages/Profile/Profile'
import store from './store/store'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated()
      ? <Component {...props} {...rest} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
  )}/>
)

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

const NonAuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated()
      ? <Redirect to={{ pathname: '/' }}/>
      : <Component {...props} {...rest} />
  )}/>
)

function App () {
  return (
    <Router>
      <Provider store={store}>
        <div className='App'>
          <Page>
            <NonAuthenticatedRoute exact path='/login' component={Login}/>
            {/*<NonAuthenticatedRoute exact path='/inscription' component={Register}/>*/}
            {/*<NonAuthenticatedRoute exact path='/recuperation' component={Recovery}/>*/}
            {/*<PublicRoute exact path='/' component={Home}/>*/}
            {/*<PublicRoute exact path='/profil' component={Profile}/>*/}
          </Page>
        </div>
      </Provider>
    </Router>
  )
}

export default App
