const Day = require("../models").Day;

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
};

module.exports = {
    newDay,
    editDay
};