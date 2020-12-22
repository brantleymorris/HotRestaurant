var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// arrays for current tables and waiting list
var serve = [];
var wait = [];

// routes to send pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "wait.html"));
});

app.get("/serve", function (req, res) {
    return res.json(serve);
});

app.get("/wait", function (req, res) {
    return res.json(wait);
});

// routes to post data
app.post("/make", function(req, res) {
    var newRes = req.body;

    if (serve.length < 5) {
        serve.push(newRes);
        res.json({ok: true}) // since json is an object best to do a key/value pair
    }
    else {
        wait.push(newRes);
        res.json({ok: false}) // needs to be consistant
    }
});

// starts server
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});