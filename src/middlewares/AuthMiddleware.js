import decodeJWT from '../helpers/decodeJWT.js'

export default async (req, res, next) => {
  if (req.headers.authorization) {
    const parts = req.headers.authorization.split(' ')
    if (parts[0].toLowerCase() === 'bearer') {
      const authToken = parts[1]
      if (authToken) {
        req.auth = await decodeJWT(authToken)
      }
    }
  }

  next()
}
