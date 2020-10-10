//Declaring dependencies
const express = require("express");
const path = require("path");

//Setting up the Express app
let app = express();
const PORT  = process.env.Port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Data 

let reserv = [
  {
    name: "David",
    phone: "123456",
    email: "e@gmail.com",
    uid: "01"
  }
]

let esp = [
]

//Routes 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./html/home.html"));
  });

app.get("/reserve", function(req, res){
  res.sendFile(path.join(__dirname, "./html/reserve.html"));
});

app.get("/tables", function(req, res){
  res.sendFile(path.join(__dirname, "./html/tables.html"));
});

app.get("/api/tables", function(req, res){
  return res.json(reserv);
});

app.get("/api/waitlist", function(req, res){
  return res.json(esp);
});

app.post("/api/tables", function(req, res){
  let newReservation = req.body;
  if(reserv.length < 5){
    reserv.push(newReservation);
    res.json(true);
  }
  else{
    esp.push(newReservation);
    res.json(false);
  }
});

app.post("/api/clear", function(req, res){
  reserv = []
  esp = []
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });