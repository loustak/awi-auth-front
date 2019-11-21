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
      if (currentSubject.tests && currentSubject.tests.length > 0) {
        currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].nbTestsCreated += 1
        const newTestId = currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].nbTestsCreated
        currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].tests = currentSubject.tests.concat([{ id: newTestId, mark: action.payload.mark, exam: action.payload.exam, coeff: action.payload.coeff }])
      } else {
        currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].nbTestsCreated = 0
        currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].tests = [{ id: 0, mark: action.payload.mark, exam: action.payload.exam, coeff: action.payload.coeff }]
      }
      return {
        ...state,
        semesters: currentSimulator
      }
    }
    case 'DELETE_TEST': {
      const currentSemester = state.semesters.filter(semester => semester.name === action.payload.semesterName)[0]
      const currentUe = currentSemester.ue.filter(ue => ue.id === action.payload.ueId)[0]
      const currentSubject = currentUe.subjects.filter(subject => subject.id === action.payload.subjectId)[0]
      let currentSimulator = state.semesters.slice()
      const semesterIndex = currentSimulator.indexOf(currentSemester)
      const ueIndex = currentSemester.ue.indexOf(currentUe)
      const subjectIndex = currentUe.subjects.indexOf(currentSubject)
      currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].tests = currentSubject.tests.filter(test => test.id !== action.payload.testId)
      return {
        ...state,
        semesters: currentSimulator
      }
    }
    case 'UPDATE_TEST': {
      console.log(action.payload)
      const currentSemester = state.semesters.filter(semester => semester.name === action.payload.semesterName)[0]
      const currentUe = currentSemester.ue.filter(ue => ue.id === action.payload.ueId)[0]
      const currentSubject = currentUe.subjects.filter(subject => subject.id === action.payload.subjectId)[0]
      let currentSimulator = state.semesters.slice()
      const semesterIndex = currentSimulator.indexOf(currentSemester)
      const ueIndex = currentSemester.ue.indexOf(currentUe)
      const subjectIndex = currentUe.subjects.indexOf(currentSubject)
      currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].tests = currentSubject.tests.map((test, i) => test.id === action.payload.testId ? { ...test, exam: action.payload.testName, mark: action.payload.testMark, coeff: action.payload.testCoeff } : test)
      console.log(currentSimulator[semesterIndex].ue[ueIndex].subjects[subjectIndex].tests)
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