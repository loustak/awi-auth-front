export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_USER_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'FETCH_CURRENT_USER_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload
      }
    }
    case 'SET_CURRENT_USER_ROLE': {
      return {
        ...state,
        user: {
          ...state.user,
          role: action.payload
        }
      }
    }
    // case 'FETCH_USER_PROFILE_ERROR': {
    //   return {
    //     ...state,
    //     fetching: false,
    //     error: action.payload
    //   }
    // }
    //
    // case 'UPDATE_USER': {
    //   // console.log(...state)
    //   // console.log(...action.payload)
    //   return {
    //     ...state,
    //     ...action.payload
    //   }
    // }
    //
    // case 'UPDATE_USER_PROFILE_PAGE': {
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       name: action.payload.name,
    //       username: action.payload.username,
    //       picture: action.payload.picture,
    //       bio: action.payload.bio
    //     }
    //   }
    // }
    //
    // case 'ADD_COMMENT': {
    //   const newElements = state.user.comments.slice()
    //   newElements.push(action.payload)
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       comments: newElements
    //     }
    //   }
    // }
    //
    // case 'UPDATE_USER_COMMENT': {
    //   const newElements = state.user.comments.slice()
    //   let comment = state.user.comments.filter((comment, i) => comment._id === action.payload._id)[0]
    //   const commentIndex = newElements.indexOf(comment)
    //   comment = {
    //     ...action.payload
    //   }
    //   newElements[commentIndex] = comment
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       comments: newElements
    //     }
    //   }
    // }

    default:
      return {
        ...state
      }
  }
}
