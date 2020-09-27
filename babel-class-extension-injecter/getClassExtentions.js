module.exports = function getClassExtentions(extentions) {
  return extentions.expression.right.properties.map(property => {
    return property.value
  })
}