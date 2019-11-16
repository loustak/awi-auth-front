import { combineReducers } from 'redux'
import currentUser from './currentUser.reducer'
import subjects from './subjects.reducer'

export default combineReducers({
  currentUser,
  subjects
})
