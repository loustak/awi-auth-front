import axios from 'axios'

/**
 * Get apps from a user
 */
export function getUserApps (token) {
  return new Promise((resolve, reject) => {
    return axios.get('https://castelstore-back.igpolytech.fr/user/myappsondashboard', {
      headers: {
        Authorization: 'Bearer ' + token/*window.localStorage.getItem('accessToken')*/
      }
    }).then(response => response.data)
      .catch(e => console.error(e))
  })
}

/**
 * Delete an app from the user's castelstore
 * @param username corresponds to mydash's firstname
 * @param idApp given by castelstore
 */
export function deleteUserApp (username, idApp) {
  return axios.delete('https://castelstore-back.igpolytech.fr/user/' + username + '/myappsondashboard/' + idApp, {
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('accessToken')
    }
  }).then(response => response.data)
    .catch(e => console.error(e))
}

export function test () {
  getUserApps("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJhbnRvaW5lIiwibGFzdG5hbWUiOiJzYW5jaGV6Iiwic2VjdGlvbiI6ImlnNSIsInJvbGUiOiJzdHVkZW50IiwiZW1haWwiOiJhbnRvaW5lLnNhbmNoZXpAZXR1LnVtb250cGVsbGllci5mciIsImlhdCI6MTU3NDI1Nzk3OSwiZXhwIjoxNTc0MjYxNTc5LCJhdWQiOiI1NjZlN2ViMC0wMDgxLTQxNzEtOWNlZi1kZTllOTJlODQ5MDEiLCJpc3MiOiJjZDM1NWJiNS0wMGZmLTRmMWItOGY0My0zYWQ2OWY2ZjZkZWEifQ.vPZmcLu1V2DfcwOUpPaL3zgNh0Tz4ai3rwxpMxr5tX4")
}