import jwt from 'jsonwebtoken'
import EnvironmentModule from '../modules/EnvironmentModule.js'

export default function encodeJWT (data, options) {
  if (options) {
    return jwt.sign(data, EnvironmentModule.getKey(), options)
  }

  return jwt.sign(data, EnvironmentModule.getKey())
}
