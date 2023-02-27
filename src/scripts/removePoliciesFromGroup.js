import { DBCli } from '../database/index.js'
import AccessGroupEntity from '../entities/AccessGroupEntity/index.js'

const [,, groupId, policies = ''] = process.argv

DBCli(async () => {
  console.log('Remove policies to admin access group...')

  await AccessGroupEntity.removePolicies({
    groupId,
    policies: policies.split(',')
  })

  console.log('Updated.')
})
