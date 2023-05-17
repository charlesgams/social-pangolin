const jwt = require("jsonwebtoken")
const secret = "secret"

function encodeJWT(payload) {
    return jwt.sign(payload, secret, { expiresIn: '1h' });
}

function decodeJWT(token) {
    return jwt.verify(token, secret);
}

module.exports = { encodeJWT, decodeJWT }