const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRECT = "Aditya";

const login = async (req, res) => {
  const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json({ errors: "Please try to login with correct Credential" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(404)
          .json({ errors: "Please try to login with correct Credential" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      let userId = data.user.id;
      const user1 = await User.findById(userId).select("-password");
      const authtoken = jwt.sign(data, JWT_SECRECT);
      // console.log(jwtData)
      var success = true;
      res.json({ success,authtoken,img:user1.img,name:user1.name,id:data.user.id });
      // res.json(data.user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Enternal sever error");
    }
  }

module.exports = login;
