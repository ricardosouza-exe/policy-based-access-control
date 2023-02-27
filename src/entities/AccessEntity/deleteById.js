import AccessModel from './model.js'

export default (id) => AccessModel.findByIdAndDelete(id)
