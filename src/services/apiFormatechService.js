import axios from 'axios'

export function getFormation (formation) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/${formation}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
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

export async function getPeriodSubjects (formationName, stepNumber, periodNumber) {
  const formation = await getFormation(formationName)

  const s = formation.steps.filter(s => s.title.includes(stepNumber))[0]
  const step = await getStep(s.id)

  const p = step.periods.filter(p => p.title.includes(periodNumber))[0]
  const period = await getPeriod(p.id)

  Promise.all(period.modules.map(async (m) => {
    const module = await getModule(m.id)
    delete module.id
    delete module.title
    return { ...m, ...module }
  }))
    .then(modules => {
      return Promise.all(modules.map(async (m) => getSubjectsInModule(m)))
    })
    .then(modules => {
      period.modules = modules
    })

  console.log(period)

  return period
}

function getSubjectsInModule (module) {
  return Promise.all(module.subjects.map(async (s) => {
    const subject = await getSubject(s.id)
    delete subject.id
    delete subject.title
    return { ...s, ...subject }
  }))
    .then(subjects => {
      module.subjects = subjects
      return module
    })
}

export function test () {
  getPeriodSubjects('IG', 3, 5)
}
