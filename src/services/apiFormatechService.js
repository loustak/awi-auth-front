import axios from 'axios'

export function getFormation (formation) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/${formation}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

export function test () {
  getTeacherSubjects('Corinne', 'Seguin' ).then(res => console.log(res))
  getPeriodSubjects('IG',3,5).then(res => console.log(res))
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

export function getTeacherSubjects (teacherFirstName, teacherLastName) {
  const trainings = ['IG']
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
                res.push({ ...s, ...subject, idModule: mo.id})
              }
            }))
          }))
        }))
      }))
    }).then(() => {return res})

}

export async function getPeriodSubjects (formationName, stepNumber, periodNumber) {
  const formation = await getFormation(formationName)

  const s = formation.steps.filter(s => s.title.includes(stepNumber))[0]
  const step = await getStep(s.id)

  const p = step.periods.filter(p => p.title.includes(periodNumber))[0]
  if (p){
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

    return period
    
  } else {
    return null
  }
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
