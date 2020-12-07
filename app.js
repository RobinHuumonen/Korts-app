const express = require('express')
require('express-async-errors')
const config = require('./utils/config')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const path = require('path')
const stackRouter = require('./controllers/stacks')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

console.log('Connecting to:', config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected');
  })
  .catch((error) => {
    console.log('Error in MongoDB connection:', error.message);
  })

app.use(cors())
app.use(express.static(path.join(__dirname, 'frontend/build')))
app.use(express.json())

app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/api/users', usersRouter)
app.use('/api/stacks', stackRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app