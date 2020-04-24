# caseify

## usage

```javascript
caseify('str', caseType[, config])
```

## examples

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
