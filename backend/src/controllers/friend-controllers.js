const FriendServices = require('../services/friend-services')

async function getUsersController(req, res, next) {
    try {
        const usersList = await FriendServices.getUsers(req.user._id)
        return res.json(usersList)
    } catch (error) {
        next(error)
    }
}

async function addFriendController(req, res, next) {
    try {
        await FriendServices.addFriend(req.user._id, req.body.friendId)
        return res.json({message: 'success'})
    } catch (error) {
        next(error)
    }
}

async function removeFriendController(req, res, next) {
    try {
        await FriendServices.removeFriend(req.user._id, req.body.friendId)
        return res.json({message: 'success'})
    } catch (error) {
        next(error)
    }
}

module.exports = { getUsersController, addFriendController, removeFriendController }