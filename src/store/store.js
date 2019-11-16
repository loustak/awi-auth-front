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

const defaultCurrentUserState = {
  currentUser: {
    fetching: false,
    fetched: false,
    error: null,
    user: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      picture: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
      role: 'teacher'
    }
  }
}

const defaultSubjectsState = {
  subjects: {
    fetching: false,
    fetched: false,
    error: null,
    subjects: [
      {
        id: '1',
        name: 'AWI',
        training: 'IG',
        year: 4,
        coeff: 1,
        students: [
          {
            id: '1',
            firstName: 'Alexandre',
            lastName: 'Kueny',
            marks: [
              {
                mark: 13,
                exam: 'DS',
                coeff: 1
              },
              {
                mark: 15,
                exam: 'DS',
                coeff: 2
              }
            ]
          },
          {
            id: '2',
            firstName: 'Mahé',
            lastName: 'Liabeuf',
            marks: [
              {
                mark: 14,
                exam: 'DS',
                coeff: 2
              },
              {
                mark: 16,
                exam: 'DS',
                coeff: 1
              }
            ]
          }
        ]
      }
    ]
  }
}

export const defaultState = Object.assign(defaultCurrentUserState, defaultSubjectsState)
export default createStore(reducer, { ...defaultState }, enhancer)
