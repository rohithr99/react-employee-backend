//connect env file
require('dotenv').config();


// import express
const express = require('express');

//cors for connecting frontend
const cors = require('cors');

const router = require('./routes/router');

//import database connection file
require('./dataBase/connections');

//create a server using express
const server = express();


server.use(cors());

//for converting the incoming json data to javascript we use a express method
server.use(express.json());

//using router class which is in express defined in router.js
server.use(router);


//port setting for the server and for the .env ,both running in the same port  
const port = 8002 || process.env.port;
server.listen(port,() => {
    console.log(`___EMS server started at Port ${port}___`);
})