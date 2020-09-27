module.exports = function getClassesWithExtentions(extentions) {
  return extentions.expression.right.properties.map(property => {
    return property.key.name
  })
}