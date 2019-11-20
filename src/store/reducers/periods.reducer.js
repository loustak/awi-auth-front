export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_PERIODS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'SET_PERIODS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        periods: action.payload
      }
    }
  }
}