var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// arrays for current tables and waiting list
var serve = [];
var wait = [];

// routes to send pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
})

// routes to post data
app.post("/make", function(req, res) {
    var newRes = req.body;

    if (serve.length < 5) {
        serve.push(newRes);
    }
    else {
        wait.push(newRes);
    }
})

// starts server
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});