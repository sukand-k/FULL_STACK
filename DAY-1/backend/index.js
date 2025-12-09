require('dotenv').config()
require('./db')
const express = require("express");
const app = express();
const port = process.env.port;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/users/:id/profile', (req, res) => {
    const userID = req.params.id;
    const name = req.query.name;   // :id --> dynamic value
    const age = req.query.age;
    res.send(`UserId : ${userID} - Name : ${name} - Age : ${age}`);
});

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});
