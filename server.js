require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const routes = require("./routes");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(express.urlencoded( {extended: true }));
app.use(methodOverride('_method'));

// hold code in case cors issue needs to be resolved.

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://ebtraveleb.surge.sh");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   })

//http://localhost:3000
//https://traveljournal-eb.herokuapp.com
//http://ebtraveleb.surge.sh


const corsOptions = {
    origin: ['http://ebtraveleb.surge.sh'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use((req, res, next) => {
    next();
});

app.use("/trips", routes.trips);
app.use("/users", routes.users);

app.listen(process.env.PORT, () => {
});