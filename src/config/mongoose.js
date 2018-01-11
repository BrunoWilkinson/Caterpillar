import mongoose from 'mongoose'
import Promise from 'bluebird'

import constants from './constants'

const { mongo, env } = constants
// set mongoose Promise to Bluebird
mongoose.Promise = Promise

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true)
}

exports.connect = () => {
  mongoose.connect(mongo.uri, {
    keepAlive: 1,
    useMongoClient: true
  })
  return mongoose.connection
}
