import { DBCli } from '../database/index.js'
import AccessEntity from '../entities/AccessEntity/index.js'

const [,, username] = process.argv

DBCli(async () => {
  console.log('Deleting admin access...')

  const access = await AccessEntity.getByUsername(username)
  if (!access) throw new Error('ACCESS_NOT_FOUND')

  await AccessEntity.deleteById(access._id)

  console.log('Deleted.')
})
