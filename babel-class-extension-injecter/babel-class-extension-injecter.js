const parser = require('@babel/parser')
const generate = require('@babel/generator').default
const fs = require('fs')
const path = require('path')
const find = require('find')

module.exports = function(babel) {
  const { types: t } = babel;

  return {
    visitor: {
      Class: {
        enter(path) {
          const extentionPath = find.fileSync(/\.extentions.js$/, path.hub.file.opts.sourceRoot)
          console.log(extentionPath)
          const extentionStringified = fs.readFileSync(extentionPath[0]).toString()
          const extentionCode = parser.parse(extentionStringified, {
            sourceType: "module",
            cwd: __dirname,
            plugins: ['classProperties'],
          })
          extentionCode.program.body.map(node => {
            if(node.type === 'ExpressionStatement') {
              console.log(node.expression.right.properties)
            }
          })
          // path.node.body.body.filter(methods => {
          //   console.log(methods.body)
          // })
          // classesWithExtentions.map(className => {
          //   if (path.node.id.name === className) {
          //     path.node.body.body.map(prop => { 
          //       mappedExtensions[className].map(ext => {
          //         // prop.body.body.push(ext)
          //         // console.log(prop.body.body)
          //       })
          //     })
          //   }
          // })
        }
      },
    }
  }
}

// console.log(output.code);