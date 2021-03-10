const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.trips.index);
router.get("/new", ctrl.trips.renderNew);
router.post("/postNew", ctrl.trips.postNew);
router.get("/:id/edit", ctrl.trips.renderEdit);
router.put("/:id", ctrl.trips.putEdit);
router.delete("/:id", ctrl.trips.deleteTrip);
router.get("/:id", ctrl.trips.show);


module.exports = router;