const trips = require("../models/trips.js");

const index = (req, res) => {
    res.render("index.ejs", {
        trips: trips
    });
};

const show = (req, res) => {
    res.render("show.ejs", {
        trip: trips[req.params.id],
    });
};

const renderNew = (req, res) => {
    res.render("new.ejs");
};

const postNew = (req, res) => {
    trips.push(req.body);
    res.redirect("/trips");
};

const renderEdit = (req, res) => {
    res.render("edit.ejs", {
        trip: trips[req.params.id],
        id: req.params.id
    });
};

const putEdit = (req, res) => {
    trips[req.params.id] = req.body;
    res.redirect('/trips');
};

const deleteTrip = (req, res) => {
    trips.splice(req.params.id, 1)
    res.redirect("/trips")
};

module.exports = {
    index,
    show,
    renderNew,
    postNew,
    renderEdit,
    putEdit,
    deleteTrip,
};