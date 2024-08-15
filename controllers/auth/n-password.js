const bcrypt = require('bcryptjs')
const User = require("../../models/User");


const newpass = async (req, res) => {
    const newPassword = req.body.password
    const sentToken = req.params.token
    await User.findOne({resetToken:sentToken, expireToken:{ $gt:Date.now()}})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Try again session expired"})
        }
        bcrypt.hash(newPassword,12).then(hashedpassword=>{
           user.password = hashedpassword
           user.resetToken = undefined
           user.expireToken = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })
        })
    }).catch(err=>{
        console.log(err)
    })
}
   
module.exports = newpass;