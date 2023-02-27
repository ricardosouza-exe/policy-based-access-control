import { DBCli } from '../database/index.js'
import AccessGroupEntity from '../entities/AccessGroupEntity/index.js'

const [,, name, policies = ''] = process.argv

DBCli(async () => {
  console.log('Creating admin access group...')

  const group = await AccessGroupEntity.create({
    name,
    policies: policies.split(',')
  })

  console.log('Created. id=' + group._id)
})
