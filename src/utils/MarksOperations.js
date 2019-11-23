function getAverageFromSubject (subject) {
  if (subject.tests && subject.tests.length > 0) {
    const avg = subject.tests.reduce((accumulator, currentValue) =>
      (accumulator + currentValue.mark * currentValue.coeff), 0) /
      subject.tests.reduce((accumulator, currentValue) =>
        (accumulator + currentValue.coeff), 0)
    return Math.round(avg * 100) / 100
  }
  return null
}

function getAverageFromUE (ue) {
  if (ue.subjects && ue.subjects.length > 0) {
    const tabAvg = ue.subjects.filter(subject => getAverageFromSubject(subject))
    if (tabAvg.map(avg => avg !== null).length > 0) {
      const sumAvg = ue.subjects.reduce((accumulator, currentValue) => (accumulator + getAverageFromSubject(currentValue) * parseFloat(currentValue.credit)), 0)
      const sumCrd = ue.subjects.reduce((accumulator, currentValue) => {
        const res = getAverageFromSubject(currentValue) !== null ? (parseFloat(currentValue.credit)) : 0
        return accumulator + res
      }, 0)
      return Math.round(sumAvg / sumCrd * 100) / 100
    }
    return null
  }
  return null
}

function getGlobalAverage (period) {
  if (period && period.modules && period.modules.length > 0) {
    const tabAvg = period.modules.filter(ue => getAverageFromUE(ue))
    if (tabAvg.map(avg => avg !== null).length > 0) {
      const sumAvg = period.modules.reduce((accumulator, currentValue) => {
        const res = getAverageFromUE(currentValue) !== null && !isNaN(getAverageFromUE(currentValue)) ? (getAverageFromUE(currentValue) * getECTSFromUE(currentValue)) : 0
        return accumulator + res
      }, 0)
      const sumCrd = period.modules.reduce((accumulator, currentValue) => {
        const res = getAverageFromUE(currentValue) !== null && !isNaN(getAverageFromUE(currentValue)) ? (getECTSFromUE(currentValue)) : 0
        return accumulator + res
      }, 0)
      return Math.round(sumAvg / sumCrd * 100) / 100
    }
    return null
  }
  return null
}

function getECTSFromUE (ue) {
  if (ue.subjects) {
    return ue.subjects.reduce((accumulator, currentValue) => (accumulator + parseFloat(currentValue.credit)), 0)
  }
  return null
}

export default { getAverageFromUE, getECTSFromUE, getAverageFromSubject, getGlobalAverage }
