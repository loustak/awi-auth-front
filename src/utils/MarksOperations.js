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
    const tabAvg = ue.subjects.map(subject => [getAverageFromSubject(subject), subject.ects])
    const avg = tabAvg.reduce((accumulator, currentValue) =>
      ((accumulator + currentValue[0] * currentValue[1]) /
        ue.subjects.reduce((accumulator, currentValue) => (accumulator + currentValue.ects), 0)), 0)
    return Math.round(avg * 100) / 100
  }
  return null
}

function getECTSFromUE (ue) {
  if (ue.subjects) {
    return ue.subjects.reduce((accumulator, currentValue) => (accumulator + currentValue.ects), 0)
  }
  return null
}

export default { getAverageFromUE, getECTSFromUE, getAverageFromSubject }
