import { camelCase } from './handlers/camel-case'
import { snakeCase } from './handlers/snake-case'
import { kebapCase } from './handlers/kebap-case'
import { pascalCase } from './handlers/pascal-case'
import { upperCase, upperCaseWithSnake } from './handlers/upper-case'

export const caseTypes = new Map([
  ['camelCase', camelCase],
  ['snake_case', snakeCase],
  ['kebap-case', kebapCase],
  ['PascalCase', pascalCase],
  ['UPPERCASE', upperCase],
  ['UPPER_CASE', upperCaseWithSnake],
])
