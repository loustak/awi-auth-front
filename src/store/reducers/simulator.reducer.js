export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SEMESTER': {
      return {
        ...state,
        simulator: {
          ...state.simulator,
          semesterSelected: action.payload
        }
      }
    }
    default:
      return {
        ...state
      }
  }
}