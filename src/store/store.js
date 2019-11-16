import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    {
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }
    )
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
)

export const defaultCurrentUserState = {
  currentUser: {
    fetching: false,
    fetched: false,
    error: null,
    user: {
      _id: '',
      email: '',
      firstName: '',
      lastName: '',
      picture: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
      role: 'teacher'
    }
  }
}

export const defaultState = Object.assign(defaultCurrentUserState)
export default createStore(reducer, { ...defaultState }, enhancer)
