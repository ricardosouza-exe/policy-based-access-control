import AccessGroupModel from './model.js'

export default (id) => AccessGroupModel.findByIdAndDelete(id)
