const mongoose = require('mongoose')

function convertStringToObjectId(string) {
    return new mongoose.Types.ObjectId(string)
}

module.exports = convertStringToObjectId