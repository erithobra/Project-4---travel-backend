require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const routes = require("./routes");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(express.urlencoded( {extended: true }));
app.use(methodOverride('_method'));

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
});

app.use("/trips", routes.trips);
app.use("/users", routes.users);
app.use("/days", routes.days);

// app.get("/", (req,res) => {
//     res.send("here is your information");
// });

app.listen(process.env.PORT, () => {
    console.log("I am listening");
});