const express = require("express")
const app = express()
const methodOverride = require("method-override")
const trips = require("./models/trips.js")


app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
});

app.use(methodOverride('_method'));
app.use(express.urlencoded( {extended: true }));

app.get("/", (req,res) => {
    res.send("here is your information");
});

// index route
app.get("/trips/", (req, res) => {
    res.render("index.ejs", {
        trips: trips, 
    });
});

app.get("/trips/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/trips", (req, res) => {
    trips.push(req.body);
    console.log(trips);
    res.redirect("/trips");
});

//delete route
app.delete("/trips/:id", (req, res) => {
    trips.splice(req.params.id, 1) // removes item from array
    res.redirect("/trips") // redirect back to index
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