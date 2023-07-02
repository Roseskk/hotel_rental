const express = require("express");
// const bodyParser = require("body-parser");
const db = require("../models");
const cors = require("cors");
const hotelsRoute = require('./routes/hotels.routes')
const roomsRoute = require('./routes/rooms.routes')
const commentsRoute = require('./routes/comments.routes')

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors({
    origin: "http://localhost:3000"
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ostrov." });
});


app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/comments', commentsRoute)

// require("./routes/hotels.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});