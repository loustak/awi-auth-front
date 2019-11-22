import store from '../store'
import * as apiFormatechService from '../../services/apiFormatechService'

export function setPeriodsSubjects (formationName, periodNumber) {
  store.dispatch({ type: 'SET_PERIODS_START' })

  apiFormatechService.getPeriodsSubjects(formationName, periodNumber)
    .then(res => {
      // console.log(JSON.stringify(res[1].modules).toString())
      store.dispatch({
        type: 'SET_PERIODS_SUCCESS',
        payload: res
      })
    })
    .catch(err => {
      store.dispatch({
        type: 'SET_PERIODS_ERROR',
        payload: err
      })
    })
}
