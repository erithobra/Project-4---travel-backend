const express = require("express")
const app = express()
const methodOverride = require("method-override")
const trips = require("./models/trips.js")
const routes = require("./routes");

app.use(methodOverride('_method'));
app.use(express.urlencoded( {extended: true }));

app.use("/trips", routes.trips);
app.use("/users", routes.users);

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
});

// app.get("/", (req,res) => {
//     res.send("here is your information");
// });

app.listen(3000, () => {
    console.log("I am listening");
});