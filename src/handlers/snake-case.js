export const snakeCase = {
  joiner: '_',
  handler (arr) {
    return arr
      .map(value => value.toLowerCase())
      .join(this.joiner)
  }
}
