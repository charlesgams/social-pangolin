const router = require('express').Router(),
    { registerController, loginController } = require('../../../controllers/auth-controllers')

router.post('/register', registerController)

router.post('/login', loginController)

module.exports = router