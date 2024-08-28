const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const get = require("../controllers/note/all");
const add = require("../controllers/note/new");
const add2 = require("../controllers/note/newcs");
const get2 = require("../controllers/note/all2");

router.get("/fetchallpy",get );
router.get("/fetchallcss",get2 );



router.post("/addpy", add);
router.post("/addcs", add2);


module.exports = router;