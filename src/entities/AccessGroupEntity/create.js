import normalizeDocument from '../../helpers/normalizeDocument.js'
import removeDuplicate from '../../helpers/removeDuplicate.js'
import AccessGroupModel from './model.js'

export default ({
  name,
  policies
}) => {
  return AccessGroupModel.create({ name, policies: removeDuplicate(policies) })
    .then(normalizeDocument)
}
