const users = require("../models/users.js");

const index = (req, res) => {
    res.render("users/index.ejs", {
        users: users
    });
};

const show = (req, res) => {
    res.render("users/show.ejs", {
        user: users[req.params.id],
    });
};

module.exports = {
    index,
    show,
};