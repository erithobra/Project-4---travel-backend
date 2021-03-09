const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.users.index);
router.get("/login", ctrl.users.renderLogin);
router.post("/login", ctrl.users.login);
router.get("/new", ctrl.users.renderNew);
router.post("/", ctrl.users.postNew);
router.get("/:id/edit", ctrl.users.renderEdit);
router.put("/:id", ctrl.users.putEdit);
router.delete("/:id", ctrl.users.deleteUser);
router.get("/:id", ctrl.users.show);

module.exports = router;