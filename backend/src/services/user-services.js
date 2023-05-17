const User = require('../infrastructures/mongo/models/User')

class UserServices {
    static async userInfo(userId) {
        return await User.findById(userId)
            .select('username role -_id')
            .lean()
    }

    static async changeRole(userId, role) {
        await User.findByIdAndUpdate(userId, { role })
    }

    static async getFriend(userId) {
        const { friends } = await User.findById(userId)
            .select("friends -_id")
            .populate({
                path: "friends", 
                select: "username role"
            })
            .lean()

        return friends
    }
}

module.exports = UserServices