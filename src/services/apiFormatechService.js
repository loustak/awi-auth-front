import axios from 'axios'

/**
 * Get a formation using the Formatech API
 * @param formation A string which is the formation name (IG, DO, MEA, etc.)
 * @returns {Promise<unknown>} a Promise which contains a JSON
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
 * @returns {Promise<unknown>} a Promise which contains a JSON
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
 * @returns {Promise<unknown>} a Promise which contains a JSON
 */
export function getPeriod (period) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/period/${period.id}`)
      .then(response => resolve({ ...period, ...response.data }))
      .catch(err => reject(err))
  })
}

/**
 * Get a module using the Formatech API
 * @param idModule the module ID
 * @returns {Promise<unknown>} a Promise which contains a JSON
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
 * @returns {Promise<unknown>} a Promise which contains a JSON
 */
export function getSubject (idSubject) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/subject/${idSubject}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}


export function getTeacherSubjects (teacherFirstName, teacherLastName) {
  return getTrainingTeacherSubjects(['IG'], teacherFirstName, teacherLastName).then(r1 => {
    return r1
    /*return getTrainingTeacherSubjects(['IG'], teacherFirstName, teacherLastName).then( r2 => {
      return r1.concat(r2)
      /*return getTrainingTeacherSubjects(['GBA'], teacherFirstName, teacherLastName).then( r3 => {
        return r1.concat(r2.concat(r3))
      })
    })*/
  })
}

export function getTrainingTeacherSubjects (trainings, teacherFirstName, teacherLastName) {

  const res = []

  return Promise.all(trainings.map(async (t) => {
    const formation = await getFormation(t)
    // console.log(formation.steps)
    return formation.steps
  }))
    .then(steps => {
      return Promise.all(steps[0].map(async (s) => {
        const step = getStep(s.id)
        return step
      }))
    })
    .then(step => {
      return Promise.all(step.map(s => {
        return Promise.all(s.periods.map(async (p) => {
          const period = await getPeriod(p.id)
          return { ...p, ...period }
        }))
      }))
    })
    .then(period => {
      return Promise.all(period.map(p => {
        return Promise.all(p.map(peri => {
          return Promise.all(peri.modules.map(async (m) => {
            const module = await getModule(m.id)
            delete module.id
            delete module.title
            return { ...m, ...module }
          }))
        }))
      }))
    })
    .then(module => {
      return Promise.all(module.map(m => {
        return Promise.all(m.map(mod => {
          return Promise.all(mod.map(async (mo) => { // MO + UE
            return Promise.all(mo.subjects.map(async (s) => {
              const subject = await getSubject(s.id)
              if (subject.nomFormateur === teacherLastName && subject.prenomFormateur === teacherFirstName) {
                delete subject.id
                delete subject.title
                res.push({ ...s, ...subject, idModule: mo.id, exams: [], year: '', training:''})
              }
            }))
          }))
        }))
      }))
    }).then(() => {
      return res
    })

}


/**
 * Get all the periods, modules and subjects from a grade level given
 * @param formationName a string which is the formation name
 * @param stepNumber an integer which is the grade level number
 * @returns {Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>} a Promise which contains a JSON
 */
export function getPeriodsSubjects (formationName, stepNumber) {
  return new Promise((resolve, reject) => {
    getFormation(formationName).then(formation => {
      const s = formation.steps.filter(ss => ss.title.includes(stepNumber))[0]
      getStep(s.id).then(step => {
        Promise.all(step.periods.map(p => {
          return getPeriod(p)
        })).then(periods => {
          Promise.all(periods.map(p => {
            return getPeriodSubjects(p)
          })).then(subjects => {
            console.log(subjects)
            resolve(subjects)
          })
        })
      })
    })
  })
}

/**
 * Get all the modules and subjects from a period given
 * @param period the period JSON
 * @returns {Promise<unknown>} a Promise which contains a JSON
 */
function getPeriodSubjects (period) {
  return new Promise((resolve, reject) => {
    Promise.all(period.modules.map(m => {
      return getModule(m.id)
    })).then(modules => {
      Promise.all(modules.map(m => {
        return getSubjectsInModule(m)
      })).then(subjects => {
        console.log(subjects)
        const newPeriod = JSON.parse(JSON.stringify(period))
        newPeriod.modules = subjects
        resolve(newPeriod)
      })
    })
  })
}

/**
 * Get all the subjects from a module given
 * @param module the module JSON
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
