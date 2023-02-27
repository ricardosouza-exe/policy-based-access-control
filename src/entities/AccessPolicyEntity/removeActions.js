import get from './get.js'
import AccessPolicyModel from './model.js'

export default async ({ policyId, actions }) => {
  const policy = await get(policyId)
  if (!policy) throw new Error('POLICY_NOT_FOUND')

  const newActions = policy.actions.filter(a => !actions.find(a2 => a2 === a))

  return AccessPolicyModel.findByIdAndUpdate(policyId, { $set: { actions: newActions } })
}
