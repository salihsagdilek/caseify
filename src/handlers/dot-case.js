export const dotCase = {
  joiner: '.',
  handler (arr) {
    return arr
      .join(this.joiner)
  }
}
