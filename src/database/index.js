import mongoose from 'mongoose'
import EnvironmentModule from '../modules/EnvironmentModule.js'

export function DBCli (callback) {
  console.log('Starting database connection ...')

  connect()
    .then(() => console.log('Connected! Executing script ...'))
    .then(callback)
    .then(() => console.log('Finished'))
    .then(() => mongoose.connection.close())
    .then(() => process.exit(0))
}

async function connect () {
  await mongoose.connect(EnvironmentModule.getMongoUri())
}

export default { connect }
