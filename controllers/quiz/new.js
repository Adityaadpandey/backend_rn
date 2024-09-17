const Quiz = require('../../models/Quiz');
const { validationResult } = require('express-validator')


const add = async (req, res) => {
  try {
    const {

      question,
      options,
      correctAnswer,
      category,
      sub_category
      // user

    } = req.body;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Quiz({

      question,
      options,
      correctAnswer,
      category,
      sub_category
      // user: req.user.id,
      //   user: req.user._id,
    });
    const savedNote = await note.save();

    // res.json(savedNote);
    var json = JSON.stringify(savedNote);

    res.send(json);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = add;