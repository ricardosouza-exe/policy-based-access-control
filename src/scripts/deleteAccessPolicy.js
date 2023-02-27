import { DBCli } from '../database/index.js'
import AccessPolicyEntity from '../entities/AccessPolicyEntity/index.js'

const [,, policyId] = process.argv

DBCli(async () => {
  console.log('Deleting admin access policy...')

  await AccessPolicyEntity.deleteById(policyId)

  console.log('Deleted.')
})
