import store from '../store'

export function addTest (semesterName, ueId, subjectId, exam, mark, coeff) {
  store.dispatch({
    type: 'ADD_TEST',
    payload: { subjectId: subjectId, ueId: ueId, semesterName: semesterName, exam: exam, mark: mark, coeff: coeff }
  })
}