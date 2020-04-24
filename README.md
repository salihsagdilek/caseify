# caseify

## usage

```javascript
caseify('str', caseType[, config])
```

## examples

|Value                  |camelCase     |kebap-case       |snake_case       | PascalCase      |UPPERCASE  |UPPER_CASE
|---                    |---           |---              |---              |---              |---        |---
|Hello world            |helloWorld    |hello-world      |hello_world      |HelloWorld       |HELLOWORLD |HELLO_WORLD
|camelCase              |camelCase     |camel-case       |camel_case       |CamelCase        |CAMELCASE  |CAMEL_CASE
|kebap-case             |kebapCase     |kebap-case       |kebap_case       |KebapCase        |KEBAPCASE  |KEBAP_CASE
|snake_case             |snakeCase     |snake-case       |snake_case       |SnakeCase        |SNAKECASE  |SNAKE_CASE
|PascalCase             |pascalCase    |pascal-case      |pascal_case      |PascalCase       |PASCALCASE |PASCAL_CASE
|UPPERCASE              |uppercase     |uppercase        |uppercase        |Uppercase        |UPPERCASE  |UPPERCASE
|UPPER_CASE             |uPPERCase     |u-p-p-e-r-case   |u_p_p_e_r_case   |UPPERCase        |UPPERCASE  |U_P_P_E_R_CASE
|dot.case               |dotCase       |dot-case         |dot_case         |DotCase          |DOTCASE    |DOT_CASE



```javascript
caseify('Hello World', 'camelCase') // output: helloWorld
caseify('Hello World', 'kebap-case') // output: hello-world
caseify('Hello World', 'snake_case') // output: hello_world
caseify('Hello World', 'PascalCase') // output: HelloWorld
caseify('Hello World', 'UPPERCASE') // output: HELLOWORLD
caseify('Hello World', 'UPPER_CASE') // output: HELLO_WORLD
```

## configs
   every methods have own config but also every method have common config
   
### joiner config

```javascript
    caseify('Hello World', 'UPPERCASE', {joiner:'-'}) // output: HELLO-WORLD
```
