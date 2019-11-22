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
      const subject = state.subjects.filter(s => s.subject.id === action.payload.subjectId)[0].subject
      const subjectIndex = newSubjects.indexOf(subject)

      console.log(subject)
      const newExams = subject.exams.slice()

      const id = subject.exams ? Math.max(subject.exams.map(e => e.id)) + 1 : 1
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
    }
    case 'REMOVE_EXAM': {
      const newSubjects = state.subjects.slice()
      const subject = state.subjects.filter(s => s.subject.id === action.payload.subjectId)[0].subject
      const subjectIndex = newSubjects.indexOf(subject)

      const newExams = subject.exams.filter(e => e.id !== action.payload.examId)

      subject.exams = newExams
      newSubjects[subjectIndex] = subject

      return {
        ...state,
        subjects: newSubjects
      }
    }
    default:
      return {
        ...state
      }
  }
}
