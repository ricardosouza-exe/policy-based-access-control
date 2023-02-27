import express from 'express'
import AuthMiddleware from './middlewares/AuthMiddleware.js'
import ErrorMiddleware from './middlewares/ErrorMiddleware.js'
import database from './database/index.js'
import Router from './router/index.js'

let app

export async function initServer () {
  await database.connect()

  app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(AuthMiddleware)
  app.use(Router)
  app.use(ErrorMiddleware)

  return app
}

export async function startServer () {
  app = await initServer()

  app.listen(4000, () => {
    console.log('Server started at http://localhost:4000')
  })
}

export default app
