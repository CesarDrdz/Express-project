const model = require('../models/friends.model');

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    };

    const newFriend = {
        name: req.body.name,
        // to get the id to ++ 
        id: model.length
    };
    model.push(newFriend);

    res.json(newFriend);
}

function getFriends (req, res) {
    res.json(model);
}

function getFriend (req, res) {
    // you can be explicit and use number or place a + at the begining of req.params.friendId. 
    const friendId = Number(req.params.friendId);
    //validate values we are not in controll of 
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
}

module.exports = {
   postFriend,
   getFriends,
   getFriend 
};