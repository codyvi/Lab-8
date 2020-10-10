//Declaring dependencies
const express = require("express");
const path = require("path");

//Setting up the Express app
let app = express();
const PORT  = process.env.Port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Data 

//Routes 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./html/home.html"));
  });

app.get("/reserve", function(req, res){
  res.sendFile(path.join(__dirname, "./html/reserve.html"));
})

app.get("/tables", function(req, res){
  res.sendFile(path.join(__dirname, "./html/tables.html"));
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });