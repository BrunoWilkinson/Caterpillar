import path from 'path'
import dotenvSafe from 'dotenv-safe'

// import .env variables
dotenvSafe.load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example')
})

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri: process.env.NODE_ENV === 'test'
    ? process.env.MONGO_URI_TESTS
    : process.env.MONGO_URI
  }
}
