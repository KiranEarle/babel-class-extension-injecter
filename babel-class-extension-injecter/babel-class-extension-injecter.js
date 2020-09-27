const parser = require('@babel/parser')
const fs = require('fs')
const path = require('path')
const getClassExtentions = require('./getClassExtentions')
const getClassesWithExtentions = require('./getClassesWithExtentions')
const setClassPropertyAssignment = require('./setClassPropertyAssignment')

const stringifiedCode = fs.readFileSync(path.resolve(__dirname, '../class.extentions.js')).toString()

const parsedCode = parser.parse(stringifiedCode, {
  sourceType: "module",
  cwd: __dirname,
  plugins: ['classProperties'],
}).program.body

const extentions = parsedCode.filter(code => {
  return code.type === 'ExpressionStatement'
})[0]


const classesWithExtentions = getClassesWithExtentions(extentions)
const classExtensions = getClassExtentions(extentions).map(node => { return node.properties.map(prop => { return prop.value }) })



console.log(classExtensions)

module.exports = function(babel) {
  const { types: t } = babel;

  return {
    visitor: {
      Class: {
        enter(path) {
          classesWithExtentions.map(className => {
            if (path.node.id.name === className) {
              path.node.body.body.map(prop => { 
                // console.log(prop.body)
                prop.body.body.map(nodeProp => {
                  console.log(nodeProp.expression)
                })
              })
            }
          })
        }
      },
    }
  }
}

// console.log(output.code);