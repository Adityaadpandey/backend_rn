const PyNote = require('../../models/note');

const get = async (req, res) => {
    try {
      const note = await PyNote.find({});
      res.json(note);
      ``;
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
}
module.exports = get;