const CssNote = require('../../models/note2');

const get2 = async (req, res) => {
    try {
      const note = await CssNote.find({});
      res.json(note);
      ``;
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
}
module.exports = get2;