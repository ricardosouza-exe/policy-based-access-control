import hashPassword from '../../helpers/hashPassword.js'
import normalizeDocument from '../../helpers/normalizeDocument.js'
import AccessModel from './model.js'

export default async ({
  username,
  password,
  name,
  groupId
}) => {
  return AccessModel.create({
    username,
    password: hashPassword(password, username.toLowerCase()),
    name,
    groupId
  })
    .then(normalizeDocument)
}
