export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_SUBJECTS_START': {
      return {
        ...state,
        fetching: true
      }
    }
    case 'SET_SUBJECTS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        subjects: action.payload
      }
    }
    case 'SET_SUBJECTS': {
      return {
        ...state,
        subjects: action.payload
      }
    }
    case 'ADD_EXAM': {
      const newSubjects = state.subjects.slice()
      const subject = state.subjects.filter(s => s.id === action.payload.subjectId)[0]
      const subjectIndex = newSubjects.indexOf(subject)

      const newExams = subject.exams.slice()

      const id = subject.exams.length + 1
      const exam = {
        id: id,
        name: action.payload.name,
        coeff: action.payload.coeff,
        marks: action.payload.marks
      }

      newExams.push(exam)

      subject.exams = newExams
      newSubjects[subjectIndex] = subject

      return {
        ...state,
        subjects: newSubjects
      }

      // const newSubjects = state.subjects.slice()
      // let subject = state.subjects.filter(subject => subject.id === action.payload.subjectId)[0]
      // const subjectIndex = newSubjects.indexOf(subject)
      //
      // const newStudents = subject.students.slice()
      // let student = subject.students.filter(student => student.id === action.payload.studentId)[0]
      // const studentIndex = newStudents.indexOf(student)
      //
      // student.marks.push(action.payload.mark)
      //
      // newStudents[studentIndex] = student
      // subject.students = newStudents
      // newSubjects[subjectIndex] = subject
      //
      // return {
      //   ...state,
      //   subjects: newSubjects
      // }
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
