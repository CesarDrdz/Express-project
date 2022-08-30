const express = require('express');

const messagesController = require('../controllers/messages.controller');

// ROUTE
const messagesRouter = express.Router();

// GET req (messages)
messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessage);

module.exports = messagesRouter;
