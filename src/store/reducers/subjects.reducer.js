export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_SUBJECTS': {
      return {
        ...state,
        subjects: action.payload
      }
    }
    case 'ADD_MARK': {
      const newSubjects = state.subjects.slice()
      let subject = state.subjects.filter(subject => subject.id === action.payload.subjectId)[0]
      const subjectIndex = newSubjects.indexOf(subject)

      const newStudents = subject.students.slice()
      let student = subject.students.filter(student => student.id === action.payload.studentId)[0]
      const studentIndex = newStudents.indexOf(student)

      student.marks.push(action.payload.mark)

      newStudents[studentIndex] = student
      subject.students = newStudents
      newSubjects[subjectIndex] = subject

      return {
        ...state,
        subjects: newSubjects
      }
    }
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
