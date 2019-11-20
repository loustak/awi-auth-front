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

const defaultStudentsState = {
  students: {
    fetching: false,
    fetched: false,
    error: null,
    students: [
      {
        id: 1,
        firstName: 'Alexandre',
        lastName: 'Kueny'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      },
      {
        id: 2,
        firstName: 'Quentin',
        lastName: 'France'
      }
    ]
  }
}

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
        exams: [
          {
            id: 1,
            name: 'Exam 1',
            coeff: 2,
            marks: [
              {
                student: 1,
                mark: 12
              }
            ]
          }
        ]
      },
      {
        id: '2',
        name: 'AWI',
        training: 'IG',
        year: 5,
        coeff: 2,
        exams: [
          {
            id: 1,
            name: 'Exam 1',
            coeff: 1,
            marks: [
              {
                student: 1,
                mark: 12
              },
              {
                student: 2,
                mark: 13
              }
            ]
          }
        ]
      }
    ]
  }
}

export const defaultState = Object.assign(defaultCurrentUserState, defaultSubjectsState, defaultStudentsState)
export default createStore(reducer, { ...defaultState }, enhancer)
