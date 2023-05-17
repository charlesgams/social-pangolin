const User = require('../infrastructures/mongo/models/User')
const convertStringToObjectId = require('../utils/convert-to-object-id')

class FriendServices {
    static async getUsers(userId) {
        const { friends } = await User.findById(userId)
            .select('friends')
            .lean()

        return await User.find({ 
            _id: { $nin: [...friends, userId] } 
        })
        .select('username role')
    }

    static async addFriend(userId, friendId) {
        return await User.findByIdAndUpdate(userId, { 
            $push: { 
                friends: friendId
            } 
        })
    }

    static async removeFriend(userId, friendId) {
        return await User.findByIdAndUpdate( userId, { 
            $pull: { 
                friends: convertStringToObjectId(friendId) 
            } 
        })
    }
}

module.exports = FriendServices