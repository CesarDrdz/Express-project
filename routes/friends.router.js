const express = require('express');

const friendsController = require('../controllers/friends.controller');

// ROUTE
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) =>{
    console.log('ip address:',req.ip);
    next();
});
// POST req (friend)
friendsRouter.post('/', friendsController.postFriend);
// GET req (friends)
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;