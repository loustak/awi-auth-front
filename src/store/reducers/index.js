import { combineReducers } from 'redux'
import currentUser from './currentUser.reducer'
import subjects from './subjects.reducer'
import simulator from './simulator.reducer'

export default combineReducers({
  currentUser,
  subjects,
  simulator
})
