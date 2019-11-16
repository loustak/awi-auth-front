export function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
