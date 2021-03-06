const Trip = require("../models").Trip;
const User = require("../models").User;
const Day = require("../models").Day;
const Photo = require("../models").Photo;

const index = (req, res) => {
    Trip.findAll({
        include: [
            {
                model: User
            },
            {
                model: Day
            },
            {
                model: Photo
            }
        ]
    })
    .then(trips => {
        res.json(trips)
    })
    .catch(err => {res.send(`ERROR: ${err}`);
    })
};

const newPhoto = (req, res) => {
    Photo.create(req.body)
    .then(newPhoto => {
        res.json(newPhoto)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`)
    });
};

const newDay = (req, res) => {
    Day.create(req.body)
    .then(newDay => {
        res.json(newDay)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`)
    });
};

const editDay = (req, res) => {
    Day.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
    .then(resp => {
        res.status(200).json(resp)
    })
};

const show = (req, res) => {
    Trip.findByPk(req.params.id, {
        include: [
            {
                model: User,
                model: Day,
                model: Photo
            }
        ]
    })
    .then(trip => {
        res.render("show.ejs", {
            trip: trip
        });
    });
};

const renderNew = (req, res) => {
    res.render("new.ejs");
};

const postNew = (req, res) => {
    Trip.create(req.body)
    .then(newTrip => {
        res.json(newTrip)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`)
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
};

const deleteTrip = (req, res) => {
    Trip.destroy({ where: { id: req.params.id } })
};



module.exports = {
    index,
    show,
    renderNew,
    postNew,
    renderEdit,
    putEdit,
    deleteTrip,
    newDay,
    editDay,
    newPhoto
};