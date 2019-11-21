import { combineReducers } from 'redux'
import currentUser from './currentUser.reducer'
import subjects from './subjects.reducer'
import students from './students.reducer'
import periods from './periods.reducer'

export default combineReducers({
  currentUser,
  subjects,
  students,
  periods
})
