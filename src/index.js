import constants from './config/constants'
import app from './config/express'
import mongoose from './config/mongoose'

const { port, env } = constants

// open mongoose connection
mongoose.connect()

// listen to requests
app.listen(port, () => console.info(`server started on port ${port} (${env})`))
