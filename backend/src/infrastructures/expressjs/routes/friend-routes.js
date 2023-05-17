const router = require('express').Router(), 
    { getUsersController, 
    addFriendController, 
    removeFriendController } = require('../../../controllers/friend-controllers')

router.get('/get-users', getUsersController)

router.post('/add-friend', addFriendController)

router.put('/remove-friend', removeFriendController)

module.exports = router