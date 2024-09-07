const Note = require('../../models/note');

const get = async (req, res) => {
  try {
    const { category } = req.query; // Get the category from the query parameters

    const note = await Note.find({ category });
      // const note = await Note.find({});
      res.json(note);
      ``;
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
}
module.exports = get;