import { DBCli } from '../database/index.js'
import AccessPolicyEntity from '../entities/AccessPolicyEntity/index.js'

const [,, name, actions = ''] = process.argv

DBCli(async () => {
  console.log('Creating admin access policy...')

  const policy = await AccessPolicyEntity.create({
    name,
    actions: actions.split(',')
  })

  console.log('Created. id=' + policy._id)
})
