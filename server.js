const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send("here is your information");
})

const trips = [
    {
        startDate: "1/1/2016",
        endDate: "1/14/2016",
        destination: "US"
    },
    {
        startDate: "1/1/2017",
        endDate: "1/14/2017",
        destination: "UK"
    },
    {
        startDate: "1/1/2018",
        endDate: "1/14/2018",
        destination: "Germany"
    }
];

// index route
app.get("/trips/", (req, res) => {
    res.send(trips);
})

//show route
app.get("/trips/:id", (req, res) => {
    res.send(trips[req.params.id])
})

app.listen(3000, () => {
    console.log("I am listening");
});