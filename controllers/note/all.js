const Note = require('../../models/note');

const get = async (req, res) => {
  try {
    const { category, sub_category } = req.query;

    const query = {};

    // Filter by category first
    if (category) {
      query.category = category;
    }

    // Filter by subcategory if both category and subcategory are provided
    if (category && sub_category) {
      query.sub_category = sub_category;
    }

    const notes = await Note.find(query);
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = get;