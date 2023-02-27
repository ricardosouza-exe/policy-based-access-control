import get from './get.js'
import AccessGroupModel from './model.js'

export default async ({ groupId, policies }) => {
  const group = await get(groupId)
  if (!group) throw new Error('GROUP_NOT_FOUND')

  const newPolicies = group.policies.filter(p => !policies.find(p2 => p.equals(p2)))

  return AccessGroupModel.findByIdAndUpdate(groupId, { $set: { policies: newPolicies } })
}
