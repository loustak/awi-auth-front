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
    case 'SET_PERIODS_ERROR': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        err: action.payload
      }
    }
    case 'ADD_TEST': {
      const currentPeriods = state.periods.slice()
      const currentSemester = currentPeriods.filter(semester => semester.title === action.payload.semesterName)[0]
      const currentUe = currentSemester.modules.filter(ue => ue.id === action.payload.ueId)[0]
      const currentSubject = currentUe.subjects.filter(subject => subject.id === action.payload.subjectId)[0]
      const semesterIndex = currentPeriods.indexOf(currentSemester)
      const ueIndex = currentSemester.modules.indexOf(currentUe)
      const subjectIndex = currentUe.subjects.indexOf(currentSubject)
      if (currentSubject.tests && currentSubject.tests.length > 0) {
        currentPeriods[semesterIndex].modules[ueIndex].subjects[subjectIndex].nbTestsCreated += 1
        const newTestId = currentPeriods[semesterIndex].modules[ueIndex].subjects[subjectIndex].nbTestsCreated
        currentPeriods[semesterIndex].modules[ueIndex].subjects[subjectIndex].tests = currentSubject.tests.concat([{ id: newTestId, mark: action.payload.mark, exam: action.payload.exam, coeff: action.payload.coeff }])
      } else {
        currentPeriods[semesterIndex].modules[ueIndex].subjects[subjectIndex].nbTestsCreated = 0
        currentPeriods[semesterIndex].modules[ueIndex].subjects[subjectIndex].tests = [{ id: 0, mark: action.payload.mark, exam: action.payload.exam, coeff: action.payload.coeff }]
      }
      return {
        ...state,
        periods: currentPeriods
      }
    }
    case 'DELETE_TEST': {
      const currentPeriods = state.periods.slice()
      const currentSemester = currentPeriods.filter(semester => semester.title === action.payload.semesterName)[0]
      const currentUe = currentSemester.modules.filter(ue => ue.id === action.payload.ueId)[0]
      const currentSubject = currentUe.subjects.filter(subject => subject.id === action.payload.subjectId)[0]
      const semesterIndex = currentPeriods.indexOf(currentSemester)
      const ueIndex = currentSemester.modules.indexOf(currentUe)
      const subjectIndex = currentUe.subjects.indexOf(currentSubject)
      currentPeriods[semesterIndex].modules[ueIndex].subjects[subjectIndex].tests = currentSubject.tests.filter(test => test.id !== action.payload.testId)
      return {
        ...state,
        periods: currentPeriods
      }
    }
    case 'UPDATE_TEST': {
      const currentPeriods = state.periods.slice()
      const currentSemester = currentPeriods.filter(semester => semester.title === action.payload.semesterName)[0]
      const currentUe = currentSemester.modules.filter(ue => ue.id === action.payload.ueId)[0]
      const currentSubject = currentUe.subjects.filter(subject => subject.id === action.payload.subjectId)[0]
      const semesterIndex = currentPeriods.indexOf(currentSemester)
      const ueIndex = currentSemester.modules.indexOf(currentUe)
      const subjectIndex = currentUe.subjects.indexOf(currentSubject)
      currentPeriods[semesterIndex].modules[ueIndex].subjects[subjectIndex].tests = currentSubject.tests.map((test, i) => test.id === action.payload.testId ? { ...test, exam: action.payload.testName, mark: action.payload.testMark, coeff: action.payload.testCoeff } : test)
      return {
        ...state,
        periods: currentPeriods
      }
    }
    default:
      return {
        ...state
      }
  }
}
