function getAverageFromSubject (subject) {
  if (subject.tests) {
    const avg = subject.tests.reduce((accumulator, currentValue) =>
      (accumulator + currentValue.mark * currentValue.coeff), 0) /
      subject.tests.reduce((accumulator, currentValue) =>
        (accumulator + currentValue.coeff), 0)
    return Math.round(avg * 100) / 100
  }
  return null
}

function getAverageFromUE (ue) {
  if (ue.subjects) {
    const sumAvg = ue.subjects.reduce((accumulator, currentValue) => (accumulator + getAverageFromSubject(currentValue) * parseFloat(currentValue.credit)), 0)
    const sumCrd = ue.subjects.reduce((accumulator, currentValue) => (accumulator + parseFloat(currentValue.credit)), 0)
    return Math.round(sumAvg / sumCrd * 100) / 100
  }
  return null
}

function getGlobalAverage (period) {
  if (period.modules) {
    const sumAvg = period.modules.reduce((accumulator, currentValue) => (accumulator + getAverageFromUE(currentValue) * parseFloat(currentValue.credit)), 0)
    const sumCrd = period.modules.reduce((accumulator, currentValue) => (accumulator + parseFloat(currentValue.credit)), 0)
    return Math.round(sumAvg / sumCrd * 100) / 100
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
