// const trips = require("../models/trips.js");
const Trip = require("../models").Trip;

const index = (req, res) => {
    Trip.findAll().then(trips => {
        res.render("index.ejs", {
            trips: trips
        });
    });
};

const show = (req, res) => {
    Trip.findByPk(req.params.id).then(trip => {
        res.render("show.ejs", {
            trip: trip
        });
    });

    // res.render("show.ejs", {
    //     trip: trips[req.params.id],
    // });
};

const renderNew = (req, res) => {
    res.render("new.ejs");
};

const postNew = (req, res) => {
    Trip.create(req.body).then(newTrip => {
        res.redirect("/trips")
    });
};

const renderEdit = (req, res) => {
    Trip.findByPk(req.params.id).then(trip => {
        res.render("edit.ejs", {
            trip: trip
        });
    });
};

const putEdit = (req, res) => {
    Trip.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
    .then(trip => {
        res.redirect("/trips");
    });
    // trips[req.params.id] = req.body;
    // res.redirect('/trips');
};

const deleteTrip = (req, res) => {
    Trip.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect("/trips");
    });
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