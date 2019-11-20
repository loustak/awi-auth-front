import axios from 'axios'

export function getFormation (formation) {
  return new Promise((resolve, reject) => {
    axios.get(`https://test-api-formatech.igpolytech.fr/sagesse/${formation}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err))
  })
}

export function test () {
  getTeacherSubjects('Arnaud', 'Castelltort' )
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
  const steps = ['3','4','5']
  const periods = ['5','6','7','8','9','10']
  let res = []
  const allJSON = new Promise((resolve, reject) => {
    trainings.map(training => {
      return getFormation(training)
        .then(formation => {
          steps.map(stepNumber => {
            const step = formation.steps.filter(s => s.title.includes(stepNumber))[0]
            return getStep(step.id)
              .then(step => { // STEP DONE
                delete step.id
                delete step.title
                Object.assign(formation.steps[stepNumber-3], step)

                const periodMap = periods.map(periodNumber => { // PERIODE DONE

                  const period = step.periods.filter(p => p.title.includes(periodNumber))[0]
                  if (period) {
                     return getPeriod(period.id)
                       .then( p => {

                         Object.assign(step.periods.find(element => element.id === period.id), p)
                         const moduleMap = p.modules.map(module => { // MODULE DONE

                           return getModule(module.id)
                            .then( m => {
                              Object.assign(p.modules.find(element => element.id === module.id), m)

                              const SubjectMap = module.subjects.map( subject => { // SUBJECT DONE
                                return getSubject(subject.id)
                                  .then( s => {
                                    Object.assign( module.subjects.find(element => element.id === subject.id), s)
                                    // console.log(res)
                                    if (s.nomFormateur === teacherLastName && s.prenomFormateur === teacherFirstName){
                                      console.log(s)
                                      res.push(s)
                                    }
                                  })


                                //Promise.all(test).then(() => {console.log('MAL')});

                              })

                              Promise.all(SubjectMap).then(() => {console.log('TRAITE TOUS LES SUJETS DE ' + p.title)});
                            })
                          })
                         Promise.all(moduleMap).then(() => {console.log('TRAITE TOUS LES MODULES DE ' + p.title)});
                    })
                  } else {return null}
                })

                Promise.all(periodMap).then(() => {console.log('FIN PERIODE BIS')});
              })
          })
          console.log(res)
        })
        .catch(err => reject(err))
    })

  }).then( t => {
    console.log('FINITO')
    console.log(t)
    console.log('FINITO')

  })
}

export function getPeriodSubjects (formationName, stepNumber, periodNumber) {
  return new Promise((resolve, reject) => {
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
      .catch(err => reject(err))
    })
  })
}
