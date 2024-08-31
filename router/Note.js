const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const get = require("../controllers/note/all");
const add = require("../controllers/note/new");



router.get("/fetchallnotes",get );




router.post("/add", add);

module.exports = router;