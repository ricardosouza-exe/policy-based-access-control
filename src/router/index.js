import express from 'express'
import AccessEntity from '../entities/AccessEntity/index.js'
import AuthModule from '../modules/AuthModule.js'
import UserRoutes from './UserRoutes.js'

const Router = express.Router()

Router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body

    const access = await AccessEntity.getByLogin(username, password)
    if (!access || !access.active) return res.status(400).send('INVALID_LOGIN')

    const authToken = AuthModule.createAuthToken(access._id)

    res.json({ authToken })
  } catch (err) {
    next(err)
  }
})

UserRoutes.configureRoutes(Router)

export default Router
