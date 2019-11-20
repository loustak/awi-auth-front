import axios from 'axios'

/**
 * Get a formation using the Formatech API
 * @param formation A string which is the formation name (IG, DO, MEA, etc.)
 * @returns {Promise<unknown>} A Promise which contains a JSON
 */
export function getFormation (formation) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/${formation}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

/**
 * Get a step using the Formatech API
 * @param idStep the step ID
 * @returns {Promise<unknown>} A Promise which contains a JSON
 */
export function getStep (idStep) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/step/${idStep}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

/**
 * Get a period using the Formatech API
 * @param idPeriod the period ID
 * @returns {Promise<unknown>} A Promise which contains a JSON
 */
export function getPeriod (idPeriod) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/period/${idPeriod}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

/**
 * Get a module using the Formatech API
 * @param idModule the module ID
 * @returns {Promise<unknown>} A Promise which contains a JSON
 */
export function getModule (idModule) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/module/${idModule}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

/**
 * Get a subject using the Formatech API
 * @param idSubject the subject ID
 * @returns {Promise<unknown>} A Promise which contains a JSON
 */
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

/**
 * Get all the modules and subjects from a period given
 * @param formationName a string which is the formation name (IG, DI, MEA, etc.)
 * @param stepNumber an integer which is the grade level number
 * @param periodNumber an integer which is the semester number
 * @returns {Promise<unknown>} A Promise which contains a JSON
 */
export async function getPeriodSubjects (formationName, stepNumber, periodNumber) {
  // Get the formation
  const formation = await getFormation(formationName)

  // Filter and get the step
  const s = formation.steps.filter(s => s.title.includes(stepNumber))[0]
  const step = await getStep(s.id)

  // Filter and get the period
  const p = step.periods.filter(p => p.title.includes(periodNumber))[0]
  const period = await getPeriod(p.id)

  // Get all the modules of the period
  Promise.all(period.modules.map(async (m) => {
    // Get a module
    const module = await getModule(m.id)
    delete module.id
    delete module.title
    return { ...m, ...module }
  }))
    .then(modules => {
      // Get all subjects for the current module got
      return Promise.all(modules.map(async (m) => getSubjectsInModule(m)))
    })
    .then(modules => {
      // Add the modules data in the JSON
      period.modules = modules
    })

  return period
}

/**
 * Get all the subjects from a module given
 * @param module the module ID
 * @returns {Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>} a Promise which contains a JSON
 */
function getSubjectsInModule (module) {
  // Get all subjects for a module
  return Promise.all(module.subjects.map(async (s) => {
    const subject = await getSubject(s.id)
    delete subject.id
    delete subject.title
    return { ...s, ...subject }
  }))
    .then(subjects => {
      // Add the subjects data in the JSON
      module.subjects = subjects
      return module
    })
}
