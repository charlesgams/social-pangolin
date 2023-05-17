const User = require('../infrastructures/mongo/models/User')
const { decodeJWT } = require('./jwt')

async function authMiddleware(req, res, next) {
    if(!req.headers.authorization)
        return res.sendStatus(401)


    try {
        const { _id } = decodeJWT(req.headers.authorization)

        const user = await User.findById(_id)

        if (user) {
            req.user = user
            return next()
        } else {
            return res.sendStatus(401)
        }
        
    } catch (error) {
        next(error)
    }
}

module.exports = authMiddleware