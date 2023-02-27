import hashPassword from '../../helpers/hashPassword.js'
import normalizeDocument from '../../helpers/normalizeDocument.js'
import AccessModel from './model.js'

export default (username, password) => {
  return AccessModel.findOne({
    username,
    password: hashPassword(password, username.toLowerCase())
  })
    .then(normalizeDocument)
}
