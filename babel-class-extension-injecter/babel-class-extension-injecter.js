const parser = require('@babel/parser')
const fs = require('fs')
const path = require('path')
const getClassExtentions = require('./getClassExtentions')
const getClassesWithExtentions = require('./getClassesWithExtentions')

const stringifiedCode = fs.readFileSync(path.resolve(__dirname, '../class.extentions.js')).toString()

const parsedCode = parser.parse(stringifiedCode, {
  sourceType: "module",
  cwd: __dirname,
  plugins: ['classProperties'],
}).program.body

const extentions = parsedCode.filter(code => {
  return code.type === 'ExpressionStatement'
})[0]


// console.log(extentions.expression.right.properties)

const classesWithExtentions = getClassesWithExtentions(extentions)

const classExtentions = getClassExtentions(extentions)

console.log(classesWithExtentions)
// console.log(classExtentions)


module.exports = function(babel) {
  const { types: t } = babel;

  return {
    visitor: {
      Class: {
        enter(path) {
          console.log(path)
        }
      },
    }
  }
}

// console.log(output.code);