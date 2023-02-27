import { DBCli } from '../database/index.js'
import AccessEntity from '../entities/AccessEntity/index.js'

const [,, username, password, name, groupId] = process.argv

DBCli(async () => {
  console.log('Creating admin access...')

  const access = await AccessEntity.create({
    username,
    password,
    name,
    groupId
  })

  console.log('Created. id=' + access._id)
})
