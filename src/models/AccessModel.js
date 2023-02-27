import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  groupId: { type: mongoose.SchemaTypes.ObjectId, ref: 'AccessGroup', required: true },
  createdAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
})

export default mongoose.model('Access', Schema)
