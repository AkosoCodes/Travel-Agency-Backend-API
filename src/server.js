// ExpressJS
const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.static(__dirname + "/../Public/"));


// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/travello').then(() => console.log("Database Connected!")).catch((error) => console.log(error));


// Controllers
const destController = require('./controllers/destinations.controller').controller;
const userController = require('./controllers/users.controller').controller;
const bookingController = require('./controllers/bookings.controller').controller;


// CORS => Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE, HEAD, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Server Connection
app.use(destController);
app.use(userController);
app.use(bookingController);
app.listen(3000, () => console.log("Server connected on Port 3000!"));
