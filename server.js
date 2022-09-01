// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

const port = 3001

const hostName = "127.0.0.1";

//manage cross-margin resources 
const cors = require("cors")

//body parser allow backend to acsess Json data sent from the client using request.body
const bodyParser = require("body-parser")


// Start up an instance of app
const app = express() 

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())


//defining post rout
app.post("/saveData", (req, res) => {
    projectData.temp = req.body.temp
    projectData.content = req.body.content
    projectData.date = req.body.date
    res.send();
    console.log(projectData);
})

//defining get rout
const getData = (req, res) => res.send(projectData);
app.get("/allData", getData);

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const testing = () => 
console.log(`Your server is running on http://127.0.0.1:${port}`);

app.listen(port, testing);