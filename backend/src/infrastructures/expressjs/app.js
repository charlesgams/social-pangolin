const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    authMiddleware = require("../../utils/auth-middleware"),
    authRoutes = require('./routes/auth-routes'),
    friendRoutes = require('./routes/friend-routes'),
    userRoutes = require('./routes/user-routes')


const app = express()
app.use(cors())
app.use(morgan('tiny'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', authRoutes)
app.use(authMiddleware)

app.use('/users', userRoutes)
app.use('/friends', friendRoutes)

app.use((err, req, res, next) => {
    return res.status(500).json({error: err.message})
})

module.exports = app