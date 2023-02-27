import { DBCli } from '../database/index.js'
import AccessPolicyEntity from '../entities/AccessPolicyEntity/index.js'

const [,, policyId, actions = ''] = process.argv

DBCli(async () => {
  console.log('Remove actions to admin access policy...')

  await AccessPolicyEntity.removeActions({
    policyId,
    actions: actions.split(',')
  })

  console.log('Updated.')
})
