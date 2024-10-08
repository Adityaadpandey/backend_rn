const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const get = require("../controllers/note/all");
const add = require("../controllers/note/new");
const category = require("../controllers/note/category");
const sub_category = require("../controllers/note/sub_category");



router.get("/fetchallnotes",get );


router.post("/add", add);

router.get('/categories', category);
router.get('/subcategories', sub_category);


module.exports = router;