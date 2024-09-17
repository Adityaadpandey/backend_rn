const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const get = require("../controllers/quiz/all");
const add = require("../controllers/quiz/new");
const category = require("../controllers/quiz/category");
const sub_category = require("../controllers/quiz/sub_category");



router.get("/fetchallnotes",get );


router.post("/add", add);

router.get('/categories', category);
router.get('/subcategories', sub_category);


module.exports = router;