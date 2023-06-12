const router = require('express').Router(), 
    { getUsersController, 
    addFriendController, 
    removeFriendController } = require('../../../controllers/friend-controllers'),
    { registerExternController } = require('../../../controllers/auth-controllers')
router.get('/get-users', getUsersController)

router.post('/add-friend', addFriendController)

router.put('/remove-friend', removeFriendController)

router.post('/register-extern', registerExternController)

module.exports = router