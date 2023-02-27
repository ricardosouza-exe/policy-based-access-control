import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  name: { type: String, trim: true, required: true, unique: true },
  policies: { type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'AccessPolicy' }], default: [] },
  createdAt: { type: Date },
  active: { type: Boolean, default: true }
})

export default mongoose.model('AccessGroup', Schema)
