//  importing the modules for the routes
const express = require("express");
const router = express.Router();
// const crypto = require('crypto')
const {body} = require("express-validator");
var fetchUser = require("../middleware/fetchUser");
// const User = require("../models/User");

// const jwt = require('jsonwebtoken')

// requirement of the controllers
const loged = require("../controllers/auth/signin");
const login = require("../controllers/auth/login");
const id = require("../controllers/auth/id");
const forget = require("../controllers/auth/forgot");
const newpass = require("../controllers/auth/n-password");
const paid = require("../controllers/auth/payment");



// this is to create a new user
// using the loged controller
router.post(
  "/signin",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({min: 5,}),],
  loged
);

// this is to login in the account
// using the login controller
router.post('/login', [
  body("password", "Password Cannot be blank").exists(),
  body("email", "Enter a valid Email").isEmail(),],
  login
);

// this is to get the user details
// using the id controller
router.get("/getuser", fetchUser, id);

// this is to send the email to the user
// using the forget controller
router.post('/reset-password', forget);

// this is to reset the password
// using the newpass controller
router.post('/new-password/:token', newpass)


// this is to update the payment details

router.post('/payment',fetchUser, paid)

  
module.exports = router;
