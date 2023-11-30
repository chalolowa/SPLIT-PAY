const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const bodyParser = require(`body-parser`);

//importation of routes
const loginRoute = require(`./routes/login`);
const signupRoute = require(`./routes/signup`)
const landingRoute = require(`./routes/landing`);
const activites = require(`./routes/activities`)
const server = express();


mongoose.connect('mongodb://127.0.0.1:27017/SPLIT-PAY');

server.set(`view engine`, `ejs`);
server.set(`views`, path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, `public`)));
server.use('/css', express.static(path.join(__dirname, 'public/css')));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


server.use(loginRoute);
server.use(signupRoute)
server.use(landingRoute)
server.use(activites)

module.exports = server;