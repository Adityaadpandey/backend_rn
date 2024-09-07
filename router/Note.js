const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const get = require("../controllers/note/all");
const add = require("../controllers/note/new");
const category = require("../controllers/note/category");



router.get("/fetchallnotes",get );


router.post("/add", add);

router.get('/categories', category);


module.exports = router;