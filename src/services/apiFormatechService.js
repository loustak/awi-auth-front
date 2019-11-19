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

export function getPeriodSubjects (formationName, stepNumber, periodNumber) {
  return new Promise((resolve, reject) => {
    getFormation(formationName)
      .then(formation => {
        const step = formation.steps.filter(s => s.title.includes(stepNumber))[0]
        return getStep(step.id)
      })
      .then(step => {
        const period = step.periods.filter(p => p.title.includes(periodNumber))[0]
        return getPeriod(period.id)
      })
      .then(period => {
        period.modules.map(m => {
          getModule(m.id)
            .then(module => {
              delete module.id
              delete module.title
              Object.assign(m, module)
            })
        })
        return period
      })
      .then(period2 => {
        console.log(period2)
        // period2.modules.map(m => {
        //   m.subjects.map(s => {
        //     getSubject(s.id)
        //       .then(subject => {
        //         delete subject.id
        //         delete subject.title
        //         Object.assign(s, subject)
        //       })
        //   })
        // })
        // console.log(period2)
        return period2
      })
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

export function test () {
  getPeriodSubjects('IG', 3, 5)
}
