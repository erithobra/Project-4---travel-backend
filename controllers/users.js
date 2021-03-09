const User = require("../models").User;

const index = (req, res) => {
    User.findAll().then(users => {
        res.render("users/index.ejs", {
            users: users
        });
    });
};

const renderLogin = (req, res) => {
    res.render("users/login.ejs")
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`/users/${foundUser.id}`);
    });
};

const show = (req, res) => {
    User.findByPk(req.params.id).then(user => {
        res.render("users/show.ejs", {
            user: user
        });
    });
};

const renderNew = (req, res) => {
    res.render("users/new.ejs");
};

const postNew = (req, res) => {
    User.create(req.body).then(newUser => {
        res.redirect("/users")
    });
};

const renderEdit = (req, res) => {
    User.findByPk(req.params.id).then(user => {
        res.render("users/edit.ejs", {
            user:user
        });
    });
};

const putEdit = (req, res) => {
    User.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
    .then(user => {
        res.redirect("/users");
    });
};

const deleteUser = (req, res) => {
    User.destroy({ 
        where: { id: req.params.id } }).then(() => {
            res.redirect("/users");
    });
    // users.splice(req.params.id, 1)
    // res.redirect("/users")
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