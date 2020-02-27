const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const packageRoute = require('./routes/packages');
const currencyRouter = require('./routes/currencyRate')

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/myTrav', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection Error"));
db.once('connected', () => {
    console.log('Connected to Database')
})

app.use('/packages', packageRoute);
app.use('/currencyrate', currencyRouter);

app.listen(5000, () => {
    console.log('Server started at 5000')
})