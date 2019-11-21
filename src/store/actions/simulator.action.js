import store from '../store'

export function addTest (semesterName, ueId, subjectId, exam, mark, coeff) {
  store.dispatch({
    type: 'ADD_TEST',
    payload: { subjectId: subjectId, ueId: ueId, semesterName: semesterName, exam: exam, mark: mark, coeff: coeff }
  })
}

export function deleteTest (semesterName, ueId, subjectId, testId) {
  store.dispatch({
    type: 'DELETE_TEST',
    payload: { semesterName: semesterName, ueId: ueId, subjectId: subjectId, testId: testId }
  })
}

export function updateTest (semesterName, ueId, subjectId, testId, testName, testMark, testCoeff) {
  store.dispatch({
    type: 'UPDATE_TEST',
    payload: { semesterName: semesterName, ueId: ueId, subjectId: subjectId, testId: testId, testName: testName, testMark: testMark, testCoeff: testCoeff}
  })
}
