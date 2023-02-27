import normalizeDocument from '../../helpers/normalizeDocument.js'
import AccessPolicyModel from './model.js'

export default (id) => AccessPolicyModel.findById(id).then(normalizeDocument)
