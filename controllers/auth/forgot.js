const User = require("../../models/User");
const crypto = require("crypto");
const nodemailer = require('nodemailer')
// let aws = require("@aws-sdk/client-ses");
// let { defaultProvider } = require("@aws-sdk/credential-provider-node");
// const sendgridTransport = require('nodemailer-sendgrid-transport')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adityapandeyadp@gmail.com',
      pass: 'jonyjony123'
    }
});
  
// const ses = new aws.SES({
//     apiVersion: "2010-12-01",
//     region: "us-east-1",
//     defaultProvider,
//   });
  
//   // create Nodemailer SES transporter
// let transporter = nodemailer.createTransport({
//     SES: { ses, aws },
//   });

const forget = async (req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"User dont exists with that email"})
            }
            user.resetToken = token
          user.expireToken = Date.now() + 3600000
          const host = 'http://localhost:5000'
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"adityapandeyadp@gmail.com",
                    subject:"password reset",
                    html:`
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="${host}/api/auth/new-password/${token}">link</a> to reset password</h5>
                    `
                })
                res.json({message:"check your email"})
            })
  
        })
    })
  }

module.exports = forget;