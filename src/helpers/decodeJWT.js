import EnvironmentModule from '../modules/EnvironmentModule.js'
import jwt from 'jsonwebtoken'

export default function decodeJWT (token) {
  const KEY = EnvironmentModule.getKey()

  return new Promise((resolve) => {
    jwt.verify(token, KEY, (err, data) => {
      if (err) resolve(null)
      resolve(data)
    })
  })
}
