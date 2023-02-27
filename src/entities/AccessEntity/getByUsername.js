import normalizeDocument from '../../helpers/normalizeDocument.js'
import AccessModel from './model.js'

export default (username) => AccessModel.findOne({ username }).then(normalizeDocument)
