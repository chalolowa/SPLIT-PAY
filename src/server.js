const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const route = require('./routes');

const server = express();

server.set(`view engine`, `ejs`);
server.set(`views`, path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, `public`)));
server.use('/css', express.static(path.join(__dirname, 'public/css')));

server.use("/", route);

module.exports = server;