const router = require('express').Router(),
    { putChangeRoleController, getFriendsController, getUserInformationsController } = require('../../../controllers/user-controllers')

router.put('/change-role', putChangeRoleController)

router.get('/get-friends', getFriendsController)

router.get('/', getUserInformationsController)

module.exports = router