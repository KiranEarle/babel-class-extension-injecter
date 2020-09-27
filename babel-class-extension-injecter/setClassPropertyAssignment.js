module.exports = function setClassPropertyAssignment(classDefinitions, classExtentions) {
  const propertyAssignments = {}
  classDefinitions.map((ClassDefinition, i) => {
    propertyAssignments[ClassDefinition] = classExtentions[i]
  })

  return propertyAssignments
}