import store from '../store'

// import { fetchUser, updateProfileActionDistant } from '../../services/User.services'

export function addMark (subjectId, studentId, mark) {
  store.dispatch({
    type: 'ADD_MARK',
    payload: { subjectId: subjectId, studentId: studentId, mark: mark }
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
