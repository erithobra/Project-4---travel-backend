const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/new", ctrl.days.newDay);

module.exports = router;