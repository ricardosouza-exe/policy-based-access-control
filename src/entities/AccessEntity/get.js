import normalizeDocument from '../../helpers/normalizeDocument.js'
import AccessModel from './model.js'

export default (id) => AccessModel.findById(id).then(normalizeDocument)
