import { caseTypes } from './case-types'

export default function caseify (str, to, options = {}) {
  if (caseTypes.has(to)) {
    const { joiner, handler } = caseTypes.get(to)
    str = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    return handler.call({ joiner, ...options }, str)
  } else {
    return str
  }
}
