const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://mongo:27017/test")
.then(() => console.log("MongoDB Connected"));

app.get("/", (req, res) => {
    res.send("Hello from Node.js Microservice");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});