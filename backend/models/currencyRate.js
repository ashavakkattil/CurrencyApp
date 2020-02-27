const mongoose = require('mongoose');

var currencyRateSchema = mongoose.Schema({
    date: Date,
    INR: Number,
    USD: Number,
    NGN: Number,
    EUR: Number,
    KWD: Number,
    BHD: Number,
    GBP: Number,
    CHF: Number,
    CAD: Number,
    JPY: Number,
    AUD: Number,
    OMR: Number,
});

module.exports = mongoose.model('currencyRate', currencyRateSchema)