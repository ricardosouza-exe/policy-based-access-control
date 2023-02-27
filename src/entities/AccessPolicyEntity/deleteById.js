import AccessPolicyModel from './model.js'

export default (id) => AccessPolicyModel.findByIdAndDelete(id)
