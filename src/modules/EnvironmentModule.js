import dotenv from 'dotenv'
dotenv.config()

export default {
  get (key, defaultValue = null) {
    return process.env[key] || defaultValue
  },

  getKey () {
    return this.get('KEY', 'key-example')
  },

  getPort () {
    return this.get('PORT', 4000)
  },

  getMongoUri () {
    return this.get('MONGO_URI', 'mongodb://localhost:27017/pbac')
  }
}
