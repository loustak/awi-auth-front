import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { auth } from '../../../services/oauth2Service'
import { AbsoluteRedirect } from '../../../App'
import jwtDecode from 'jwt-decode'
import { setCurrentUser } from '../../../store/actions/currentUser.action'
import { logout } from '../../../services/AuthenticationService'
import styles from '../../Dashboard/Dashboard.module.css'

class LoginPage extends React.Component {
  // -----------------------------FUNCTIONS-------------------------------------

  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      ok: false
    }
  }

  async componentDidMount () {
    const query = new URLSearchParams(this.props.location.search)
    const code = query.get('code')

    if (code !== undefined && code !== null) {
      try {
        const response = await auth.code.getToken(this.props.location.pathname + this.props.location.search)
        logout()
        window.localStorage.setItem('accessToken', response.accessToken)
        window.localStorage.setItem('refreshToken', response.refreshToken)
        setCurrentUser(jwtDecode(response.accessToken))
        this.setState({ loading: false, ok: true })
      } catch (e) {
        this.setState({ loading: false, ok: false })
      }
    } else {
      this.setState({ loading: false, ok: false })
    }
  }

  render () {
    return (
      this.state.loading
        ? <div className={styles.loading}>
          <div className='spinner-border text-info' role='status'>
            <span className='sr-only' />
          </div>
          <div className={styles.loadingText}>
            <h4>Chargement en cours</h4>
          </div>
        </div>
        : (this.state.ok
          ? <Redirect to='/' />
          : <AbsoluteRedirect to={auth.code.getUri()} />
        )
    )
  }
}

export default withRouter(LoginPage)
