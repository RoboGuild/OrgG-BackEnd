/*********************************************************************************
* WEB422 – Assignment 6
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Ania M. Pienio Student ID: 041780073 Date: August 2, 2019
*
   Heroku: https://web422-assignment-6-ap.herokuapp.com/home
*
********************************************************************************/

var express = require("express");
var app = express();

var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

// setup the static folder 
app.use(express.static("public")); 


app.get("/awake", (req, res) => {
  res.json({"message": "awake"});
});

// handle "404" errors
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Start the server
app.listen(HTTP_PORT, function(){
    console.log("Server listening on port: " + HTTP_PORT);
});
