const users = require("../models/users.js");

const index = (req, res) => {
    res.render("users/index.ejs", {
        users: users
    });
};

const renderLogin = (req, res) => {
    res.render("users/login.ejs")
}

const login = (req, res) => {
    let index = users.findIndex(
        user => (user.firstName === req.body.firstName &&
            user.lastName === req.body.lastName && 
            user.password === req.body.password)
    )
    res.redirect(`/users/${index}`);
};

const show = (req, res) => {
    res.render("users/show.ejs", {
        user: users[req.params.id],
    });
};

const renderNew = (req, res) => {
    res.render("users/new.ejs");
};

const postNew = (req, res) => {
    users.push(req.body);
    res.redirect("/users");
};

const renderEdit = (req, res) => {
    res.render("users/edit.ejs", {
        user: users[req.params.id],
        id: req.params.id
    });
};

const putEdit = (req, res) => {
    users[req.params.id] = req.body;
    res.redirect("/users");
};

const deleteUser = (req, res) => {
    users.splice(req.params.id, 1)
    res.redirect("/users")
};

module.exports = {
    index,
    show,
    renderNew,
    postNew,
    renderEdit,
    putEdit,
    deleteUser,
    renderLogin,
    login
};