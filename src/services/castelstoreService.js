import axios from 'axios'

/**
 * Get apps from a user
 */
export function getUserApps () {
  return new Promise((resolve, reject) => {
    return axios.get('https://castelstore-back.igpolytech.fr/user/myappsondashboard', {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('accessToken')
      }
    }).then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

/**
 * Delete an app from the user's castelstore
 * @param username corresponds to mydash's firstname
 * @param idApp given by castelstore
 */
export function deleteUserApp (username, idApp) {
  return new Promise((resolve,reject) => {
    return axios.delete('https://castelstore-back.igpolytech.fr/user/name/' + username + '/myappsondashboard/' + idApp, {
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('accessToken')
      }
    }).then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}
