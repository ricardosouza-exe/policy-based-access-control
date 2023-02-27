import AuthModule from '../modules/AuthModule.js'

const configureRoutes = (router) => {
  router.get('/users', async (req, res, next) => {
    try {
      await AuthModule.verify(req.auth, ['full-access', 'user-full-access', 'user-list'])
      res.send(null)
    } catch (err) {
      next(err)
    }
  })

  router.post('/users', async (req, res, next) => {
    try {
      await AuthModule.verify(req.auth, ['full-access', 'user-full-access', 'user-create'])
      res.send(null)
    } catch (err) {
      next(err)
    }
  })

  router.put('/users/:id', async (req, res, next) => {
    try {
      await AuthModule.verify(req.auth, ['full-access', 'user-full-access', 'user-update'])
      res.send(null)
    } catch (err) {
      next(err)
    }
  })

  router.get('/users/:id', async (req, res, next) => {
    try {
      await AuthModule.verify(req.auth, ['full-access', 'user-full-access', 'user-read'])
      res.send(null)
    } catch (err) {
      next(err)
    }
  })

  router.delete('/users/:id', async (req, res, next) => {
    try {
      await AuthModule.verify(req.auth, ['full-access', 'user-full-access', 'user-delete'])
      res.send(null)
    } catch (err) {
      next(err)
    }
  })
}

export default { configureRoutes }
