export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TEST': {
      const currentSemester = state.semesters.filter(semester => semester.name === action.payload.semesterName)[0]
      const currentUe = currentSemester.ue.filter(ue => ue.id === action.payload.ueId)[0]
      const currentSubject = currentUe.subjects.filter(subject => subject.id === action.payload.subjectId)[0]
      let currentSimulator = state.semesters.slice()
      const semesterIndex = currentSimulator.indexOf(currentSemester)
      const ueIndex = currentSemester.ue.indexOf(currentUe)
      const subjectIndex = currentUe.subjects.indexOf(currentSubject)
      if (currentSubject.tests) currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].tests = currentSubject.tests.concat([{ mark: action.payload.mark, exam: action.payload.exam, coeff: action.payload.coeff }])
      else currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].tests = [{ mark: action.payload.mark, exam: action.payload.exam, coeff: action.payload.coeff }]
      return {
        ...state,
        semesters: currentSimulator
      }
    }
    default:
      return {
        ...state
      }
  }
}