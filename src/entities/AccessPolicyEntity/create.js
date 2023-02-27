import normalizeDocument from '../../helpers/normalizeDocument.js'
import removeDuplicate from '../../helpers/removeDuplicate.js'
import AccessPolicyModel from './model.js'

export default ({
  name,
  actions
}) => {
  return AccessPolicyModel.create({ name, actions: removeDuplicate(actions) })
    .then(normalizeDocument)
}
