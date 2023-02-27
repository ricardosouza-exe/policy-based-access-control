import { DBCli } from '../database/index.js'
import AccessGroupEntity from '../entities/AccessGroupEntity/index.js'

const [,, groupId] = process.argv

DBCli(async () => {
  console.log('Deleting admin access group...')

  await AccessGroupEntity.deleteById(groupId)

  console.log('Deleted.')
})
