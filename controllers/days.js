const Day = require("../models").Day;

const newDay = (req, res) => {
    Day.create(reg.body)
    .then(newDay => {
        res.json(newDay)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`)
    });
};

module.exports = {
    newDay
};