const express = require("express");
const router = express.Router();
// const fetchUser = require("../middleware/fetchUser");
const Note = require("../models/note");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get("/fetchallnotes", async (req, res) => {
  try {
    const note = await Note.find({});
    res.json(note.reverse());
    ``;
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// router.get("/latest", async (req, res) => { 
//   try {
//     const notes = await Book.find({});
//     res.json(notes.reverse());
//     ``;

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// ROUTE 2: Add a new Book using: POST "/api/notes/addnote". Login required
router.post("/add", async (req, res) => {
  try {
    const {
      id,
      title,
      content,
      
    } = req.body;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
        id,
        title,
        content,
    });
    const savedNote = await note.save();

    // res.json(savedNote);
    var json = JSON.stringify(savedNote);
   
    res.send(json);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;