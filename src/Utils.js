export function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const env = process.env.REACT_APP_ENV

export function inProduction () {
  return env === 'prod'
}

export function inLocalDev () {
  return env === 'dev'
}

export function inIntegration () {
  return env === 'int'
}

export function inTest () {
  return env === 'test'
}