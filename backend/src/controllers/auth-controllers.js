const AuthServices = require('../services/auth-services')
const FriendServices = require('../services/friend-services')

async function registerController(req, res, next) {
    try {
        await AuthServices.register(
            req.body.username, 
            req.body.password, 
            req.body.role
        )
        return res.json({message: "sucess"})
    } catch (error) {
        next(error)
    }
}

async function loginController(req, res, next) {
    try {
        const token = await AuthServices.login(
            req.body.username, 
            req.body.password
            )
        return res.json({token})
    } catch (error) {
        next(error)
    }
}

async function registerExternController(req, res, next) {
    try {
        const userId = await AuthServices.register(
            req.body.username, 
            req.body.password, 
            req.body.role
        )

        await FriendServices.addFriend(
            req.user._id,
            userId
        )

        return res.json({message: "sucess"})
    } catch (error) {
        next(error)
    }
}

module.exports = { registerController, loginController,registerExternController }