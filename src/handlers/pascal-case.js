export const pascalCase = {
  joiner: '',
  handler (arr) {
    return arr
      .map(key => key.charAt(0).toUpperCase() + key.slice(1).toLowerCase())
      .join(this.joiner)
  }
}
