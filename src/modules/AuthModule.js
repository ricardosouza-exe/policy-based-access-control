import AccessEntity from '../entities/AccessEntity/index.js'
import AccessGroupEntity from '../entities/AccessGroupEntity/index.js'
import AccessPolicyEntity from '../entities/AccessPolicyEntity/index.js'
import encodeJWT from '../helpers/encodeJWT.js'
import removeDuplicate from '../helpers/removeDuplicate.js'

export default {
  async verify (auth, validPolicyActions = null) {
    if (!auth) throw new Error('MISSING_TOKEN')

    const access = await AccessEntity.get(auth.accessId)
    if (!access || !access.active) throw new Error('ACCESS_NOT_FOUND')

    const accessGroup = await AccessGroupEntity.get(access.groupId)
    if (!accessGroup || !accessGroup.active) throw new Error('ACCESS_GROUP_NOT_FOUND')

    const policies = await AccessPolicyEntity.getByIds(accessGroup.policies)

    const actions = removeDuplicate(policies.reduce((actions, policy) => actions.concat(policy.actions), []))

    if (!validPolicyActions) return access

    const isValid = validPolicyActions.reduce((result, validAction) => result || actions.includes(validAction), false)
    if (!isValid) throw new Error('NOT_ALLOWED')

    return access
  },

  createAuthToken (accessId) {
    return encodeJWT({ accessId })
  }
}
