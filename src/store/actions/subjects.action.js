import store from '../store'
import * as apiFormatechService from '../../services/apiFormatechService'

// import { fetchUser, updateProfileActionDistant } from '../../services/User.services'

export function addExam (subjectId, name, coeff, marks) {
  store.dispatch({
    type: 'ADD_EXAM',
    payload: { subjectId: subjectId, name: name, coeff: coeff, marks: marks }
  })
}

export function setTeacherSubjects (teacherFirstName, teacherLastName) {
  store.dispatch({type: 'SET_SUBJECTS_START'})

  apiFormatechService.getTeacherSubjects( teacherFirstName, teacherLastName)
    .then(res => {
      store.dispatch({
        type: 'SET_SUBJECTS_SUCCESS',
        payload: res
      })
    })
    .catch(err => {
      store.dispatch({
        type: 'SET_SUBJECTS_ERROR',
        payload: err
      })
    })
}


// export function setFetchedUser (id) {
//   return new Promise((resolve, reject) => {
//     store.dispatch({type: 'FETCH_USER_PROFILE_START'})
//     fetchUser(id).then(user => {
//       store.dispatch({
//         type: 'FETCH_USER_PROFILE_SUCCESS',
//         payload: user
//       })
//       resolve(user)
//     }).catch(err => {
//       store.dispatch({
//         type: 'FETCH_USER_PROFILE_ERROR',
//         payload: err
//       })
//       reject(err)
//     })
//   })
// }


// export function setFetchedUser (id) {
//   return new Promise((resolve, reject) => {
//     store.dispatch({type: 'FETCH_USER_PROFILE_START'})
//     fetchUser(id).then(user => {
//       store.dispatch({
//         type: 'FETCH_USER_PROFILE_SUCCESS',
//         payload: user
//       })
//       resolve(user)
//     }).catch(err => {
//       store.dispatch({
//         type: 'FETCH_USER_PROFILE_ERROR',
//         payload: err
//       })
//       reject(err)
//     })
//   })
// }
//
// export function updateProfileAction (user) {
//   // console.log('1 user > action')
//   return new Promise((resolve, reject) => {
//     updateProfileActionDistant(user).then((data) => {
//       store.dispatch({
//         type: 'UPDATE_USER',
//         payload: data
//       })
//       resolve(data)
//     }).catch((err) => {
//       reject(err)
//     })
//   })
// }
//
// export function updateProfilePageAction (datas) {
//   store.dispatch({
//     type: 'UPDATE_USER_PROFILE_PAGE',
//     payload: datas
//   })
// }
//
// export function addCommentToUser (datas) {
//   store.dispatch({
//     type: 'ADD_COMMENT',
//     payload: datas
//   })
// }
