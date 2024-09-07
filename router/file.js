const express = require('express');
const router = express.Router();
var fetchUser = require("../middleware/fetchUser");
const multer = require('multer');
const File = require('../models/File');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Upload a file
router.post('/upload', fetchUser, upload.single('file'), async (req, res) => {
  try {
    const newFile = new File({
      user: req.user.id,
      filename: req.file.filename,
      path: req.file.path,
    });

    const savedFile = await newFile.save();
    res.json(savedFile);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Download a file
router.get('/download/:id', fetchUser, async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.download(file.path, file.filename);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
