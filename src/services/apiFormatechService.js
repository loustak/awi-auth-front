import axios from 'axios'

export function getFormation (formation) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/${formation}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

export function test () {
  getPeriodSubjects('IG', 3, 5)
}

export function getStep (idStep) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/step/${idStep}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

export function getPeriod (idPeriod) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/period/${idPeriod}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

export function getModule (idModule) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/module/${idModule}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

export function getSubject (idSubject) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/subject/${idSubject}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

export function getTeacherSubjects (formation, teacher) {
  // TODO
}

export function getPeriodSubjects (formationName, stepNumber, periodNumber) {
  return new Promise((resolve, reject) => {
    getFormation(formationName)
      .then(formation => {
        formation.steps = formation.steps.filter(s => s.title.includes(stepNumber))
        getStep(formation.steps[0].id)
          .then(step => {
            delete step.id
            delete step.title
            Object.assign(formation.steps[0], step)
            return formation
          })
        console.log(formation)
        return formation
      })
      .catch(err => reject(err))
  })
}
