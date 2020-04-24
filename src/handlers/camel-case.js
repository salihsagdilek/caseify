export const camelCase = {
  joiner: '',
  handler (arr) {
    return arr
      .map((key, index) => index ? (key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()) : key.toLowerCase())
      .join(this.joiner)
  }
}
