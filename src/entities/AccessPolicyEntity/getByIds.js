import AccessPolicyModel from './model.js'

export default (ids) => AccessPolicyModel.find({ _id: { $in: ids }, active: true })
