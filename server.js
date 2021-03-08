const express = require("express")
const app = express()
const trips = require("./models/trips.js")

app.get("/", (req,res) => {
    res.send("here is your information");
})



// index route
app.get("/trips/", (req, res) => {
    res.send(trips);
});

app.get("/trips/new", (req, res) => {
    res.render("new.ejs");
});

//show route
app.get("/trips/:id", (req, res) => {
    res.render("show.ejs", {
        trip: trips[req.params.id],
    });
});



app.listen(3000, () => {
    console.log("I am listening");
});