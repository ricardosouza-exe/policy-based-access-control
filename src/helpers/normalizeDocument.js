export default (doc) => {
  if (!doc) return null
  if (!doc.toJSON) return doc
  return doc.toJSON()
}
