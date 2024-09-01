const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Aditya";

const loged = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res
      .status(400)
      .json({ error: "Sorry, a user with this email already exists." });
  }

  let name = await User.findOne({ name: req.body.name });
  if (name) {
    return res
      .status(400)
      .json({ error: "Sorry, a user with this username already exists." });
  }

  try {
    // Hashing the password
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const nPass = await bcrypt.hash(password, salt);

    // Generating a unique avatar URL using Dicebear
    // const seed = Math.floor(Math.random() * 5000);
    const img = `https://robohash.org/${email}.pnf`;
    // https://api.dicebear.com/9.x/pixel-art/svg//${seed}.svg`;
    // https://api.dicebear.com/9.x/pixel-art/svg/4566
    // Creating the user and storing it in the database
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: nPass,
      img: img,
    });

    // Generating a JWT token
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, JWT_SECRET);
    const success = true;

    // Sending the response with the token and user information
    res.status(200).json({ success, token, img, name: req.body.name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = loged;
