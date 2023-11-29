const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`);


//importation of routes
const loginRoute = require(`./routes/login`);
const signupRoute = require(`./routes/signup`)

const server = express();


mongoose.connect('mongodb://127.0.0.1:27017/SPLIT-PAY');

server.set(`view engine`, `ejs`);
server.set(`views`, path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, `public`)));
server.use('/css', express.static(path.join(__dirname, 'public/css')));


server.use(loginRoute);
server.use(signupRoute)



module.exports = server;