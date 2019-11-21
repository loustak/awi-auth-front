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
  return 1
}

function getECTSFromUE (ue) {
  if (ue.subjects) {
    return ue.subjects.reduce((accumulator, currentValue) => (accumulator + parseFloat(currentValue.credit)), 0)
  }
  return null
}

export default { getAverageFromUE, getECTSFromUE, getAverageFromSubject }
