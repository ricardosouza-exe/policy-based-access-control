import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  name: { type: String, trim: true, required: true, unique: true },
  actions: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
})

export default mongoose.model('AccessPolicy', Schema)
