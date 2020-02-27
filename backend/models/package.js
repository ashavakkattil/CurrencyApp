const mongoose = require('mongoose');

var packageSchema = mongoose.Schema({
    name: String,
    price: Number,
    supplier_currency: String
});

module.exports = mongoose.model('package', packageSchema)