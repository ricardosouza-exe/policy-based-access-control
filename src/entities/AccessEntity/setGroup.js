import AccessModel from './model.js'

export default (id, groupId) => AccessModel.findByIdAndUpdate(id, { $set: { groupId } })
