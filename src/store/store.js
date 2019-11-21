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
        id: 3,
        firstName: 'Audrey',
        lastName: 'Samson'
      },
      {
        id: 4,
        firstName: 'Antoine',
        lastName: 'Sanchez'
      },
      {
        id: 5,
        firstName: 'Aubin',
        lastName: 'Abadie'
      },
      {
        id: 6,
        firstName: 'Delton',
        lastName: 'Vaz'
      }
    ]
  }
}

const defaultCurrentUserState = {
  currentUser: {
    fetching: false,
    fetched: false,
    error: null,
    user: null
  }
}

const defaultSubjectsState = {
  subjects: {
    fetching: false,
    fetched: false,
    error: null,
    subjects: []
  }
}

const defaultPeriodsState = {
  periods: {
    fetching: false,
    fetched: false,
    error: null,
    periods: []
  }
}

export const defaultState = Object.assign(defaultCurrentUserState, defaultSubjectsState, defaultStudentsState, defaultPeriodsState)
const defaultSimulatorState = {
  simulator: {
    semesters: [
      {
        name: 'Semestre 8',
        ue: [
          {
            id: 1,
            name: 'Architecture des Systemes d\'Information',
            subjects: [
              {
                id: 1,
                name: 'Applications Web et Interopérabilité',
                ects: 4.5
              },
              {
                id: 2,
                name: 'Tests des Systèmes d\'Information',
                ects: 0.5
              },
              {
                id: 3,
                name: 'Urbanisation des SI',
                ects: 1
              }
            ]
          },
          {
            id: 2,
            name: 'Traitement des données et sécurité',
            subjects: [
              {
                id: 4,
                name: 'Sécurité des SI',
                ects: 1
              },
              {
                id: 5,
                name: 'Data Science Avancée',
                ects: 1
              }
            ]
          }
        ]
      },
      {
        name: 'Semestre 9'
      }
    ]
  }
}

export const defaultState = Object.assign(defaultCurrentUserState, defaultSubjectsState, defaultSimulatorState)
export default createStore(reducer, { ...defaultState }, enhancer)
