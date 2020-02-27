const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/myTrav', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection Error"));
db.once('connected', () => {
    console.log('Connected to Database')
})


app.listen(5000, () => {
    console.log('Server started at 5000')
})