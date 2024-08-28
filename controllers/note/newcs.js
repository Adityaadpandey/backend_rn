const CssNote = require('../../models/note2');

const add2 = async (req, res) => {
    try {
      const {
        id,
        title,
        content,
        category,
        // user
        
      } = req.body;
  
      // If there are errors, return Bad request and the errors
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res.status(400).json({ errors: errors.array() });
      // }
      const note = new CssNote({
          id,
          title,
        content,
          category,
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
  
module.exports = add2;