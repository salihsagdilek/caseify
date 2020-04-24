export const kebapCase = {
  joiner: '-',
  handler (arr) {
    return arr
      .map(value => value.toLowerCase())
      .join(this.joiner)
  }
}
