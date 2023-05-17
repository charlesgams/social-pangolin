const bcrypt = require('bcrypt'),
    User = require("../infrastructures/mongo/models/User"),
    { encodeJWT } = require('../utils/jwt')

class AuthServices {
    static async register(username, password, role) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const user = new User({
            username,
            password: hash,
            role
        })

        await user.save()
    }

    static async login(username, reqPassword) {
        const user = await User.findOne({username: username})
            .select("password")
            .lean();

        if(!user)
            throw "No user found"

        const isSame = await bcrypt.compare(reqPassword, user.password)

       if(!isSame)
           throw "Wrong password"

        return encodeJWT({ _id: user._id })
    }
}

module.exports = AuthServices