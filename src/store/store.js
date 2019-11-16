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
      picture: 'https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png',
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
        name: 'Stats',
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
      },
      {
        id: '1',
        name: 'RFID',
        training: 'MEA',
        year: 5,
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
