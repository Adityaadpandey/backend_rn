const express = require('express');
const router = express.Router();
var fetchUser = require("../middleware/fetchUser");
const Message = require('../models/Message');

// Send a message
router.post('/send', fetchUser, async (req, res) => {
  try {
    const newMessage = new Message({
      user: req.user.id,
      text: req.body.text
    });

    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Get all messages
router.get('/all', fetchUser, async (req, res) => {
  try {
    const messages = await Message.find().populate('user', ['username', 'avatar']);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
