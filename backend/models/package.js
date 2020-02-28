const mongoose = require('mongoose');

var packageSchema = mongoose.Schema({
    name: String,
    price: Number,
    supplier_currency: String
});

packageSchema.methods.calculatePrice = function (currencyRate,p) {
    
    ppackage = JSON.parse(JSON.stringify(p));
    ppackage.priceUSD = packagePrice;
    ppackage.priceINR = priceinINR;
    ppackage.priceNGN = priceinNGN;
    return ppackage;
},
    module.exports = mongoose.model('package', packageSchema)