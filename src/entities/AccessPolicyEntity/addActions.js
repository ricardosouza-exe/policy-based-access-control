import removeDuplicate from '../../helpers/removeDuplicate.js'
import get from './get.js'
import AccessPolicyModel from './model.js'

export default async ({ policyId, actions }) => {
  const policy = await get(policyId)
  if (!policy) throw new Error('POLICY_NOT_FOUND')

  const newActions = policy.actions

  removeDuplicate(actions).forEach(action => {
    if (!newActions.find(a => a === action)) {
      newActions.push(action)
    }
  })

  return AccessPolicyModel.findByIdAndUpdate(policyId, { $set: { actions: newActions } })
}
