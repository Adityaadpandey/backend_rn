const User = require("../../models/User");


const id = async(req, res) => {
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    // const user1 = user.("-resetToken")
    // const user2 = user1.select("-expireToken")
      res.send(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Enternal sever error");
    }
}
  
module.exports = id;