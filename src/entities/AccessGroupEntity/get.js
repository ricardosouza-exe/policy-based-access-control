import normalizeDocument from '../../helpers/normalizeDocument.js'
import AccessGroupModel from './model.js'

export default (id) => AccessGroupModel.findById(id).then(normalizeDocument)
