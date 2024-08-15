const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRECT = "Aditya";

const loged = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  
  if (user) {
    return res
      .status(400)
      .json({ error: "Sorry a user with this email already exists." });
  }
  let name = await User.findOne({ name: req.body.name });
  if (name) {
    return res
      .status(400)
      .json({ error: "Sorry a user with this user-name already exists." });
  }
  try {
    //  slating
    password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    nPass = await bcrypt.hash(password, salt);
    //  adding to the database
    var seed = Math.floor(Math.random() * 5000)
    var img = `https://avatars.dicebear.com/api/human/${seed}.svg`;
    user = await User.create({ name: req.body.name, email: req.body.email, password: nPass, img: img,  });
    // to generate token
    const data = {
      user: {
        id: user.id,
      }
    }
    const token = jwt.sign(data, JWT_SECRECT);
    let success = true
    // sending the token
    res.json({ success, token, img, name: req.body.name}).status(200);
  } catch (error) {
    console.log(error);
  }
}

module.exports = loged;
