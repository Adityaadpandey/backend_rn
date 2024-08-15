const User = require('../../models/User');

const paid = async(req, res) => {
    try {
        
            let userId = req.user.id;
            const user = await User.findByIdAndUpdate(userId, { last_payment: new Date(), next_payment: new Date(Date.now() + 3600000*24*30) });
            res.json({ message: "Payment Successful" });
        

        
        
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Enternal sever error");
      }
  }
    
  module.exports = paid;