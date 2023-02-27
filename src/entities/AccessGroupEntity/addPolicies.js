import removeDuplicate from '../../helpers/removeDuplicate.js'
import get from './get.js'
import AccessGroupModel from './model.js'

export default async ({ groupId, policies }) => {
  const group = await get(groupId)
  if (!group) throw new Error('GROUP_NOT_FOUND')

  const newPolicies = group.policies

  removeDuplicate(policies).forEach(policyId => {
    if (!newPolicies.find(p => p.equals(policyId))) {
      newPolicies.push(policyId)
    }
  })

  return AccessGroupModel.findByIdAndUpdate(groupId, { $set: { policies: newPolicies } })
}
