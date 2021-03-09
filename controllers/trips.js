const trips = require("../models/trips.js");

const index = (req, res) => {
    res.render("index.ejs", {
        trips: trips
    });
};

module.exports = {
    index,
}