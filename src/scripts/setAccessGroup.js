import { DBCli } from '../database/index.js'
import AccessEntity from '../entities/AccessEntity/index.js'

const [,, username, groupId] = process.argv

DBCli(async () => {
  console.log('Setting admin access groupId...')

  const access = await AccessEntity.getByUsername(username)
  if (!access) throw new Error('ACCESS_NOT_FOUND')

  await AccessEntity.setGroup(access._id, groupId)

  console.log('Updated.')
})
