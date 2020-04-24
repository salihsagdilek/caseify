function handler (arr) {
  return arr
    .map(value => value.toUpperCase())
    .join(this.joiner)
}

export const upperCaseWithSnake = {
  joiner: '_',
  handler
}

export const upperCase = {
  joiner: '',
  handler
}
