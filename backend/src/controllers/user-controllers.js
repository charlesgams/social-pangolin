const UserServices = require('../services/user-services')

async function putChangeRoleController(req, res, next) {
    try {
        await UserServices.changeRole(req.user._id, req.body.role)
        return res.json({ message: "success" })
    } catch (error) {
        next(error)
    }
}

async function getFriendsController(req, res, next) {
    try {
        const friends = await UserServices.getFriend(req.user._id)
        return res.json(friends)
    } catch (error) {
        next(error)
    }
}

async function getUserInformationsController(req, res, next) {
    try {
        const userInfo = await UserServices.userInfo(req.user._id)
        return res.json(userInfo)
    } catch (error) {
        next(error)
    }
}

module.exports = { putChangeRoleController, getFriendsController, getUserInformationsController }