import crypto from 'crypto'
import EnvironmentModule from '../modules/EnvironmentModule.js'

const secret = EnvironmentModule.getKey()

export default function hashPassword (password, username) {
  return crypto
    .createHmac('sha256', `${username.toLowerCase()}.${secret}`)
    .update(password)
    .digest('hex')
}
