const express = require('express');
const router = express.Router();

const Package = require('../models/package');
const CurrencyRate = require('../models/currencyRate');

router.get('/', (req, res) => {
    var ppackages
    Package.find({}, (error, packages) => {
        if (error) {
            res.status(500).json({
                message: error.message
            })
        }
        else {
            var x;

            CurrencyRate.findOne().sort({ date: -1 }).limit(1).exec((error, data) => {
                if (error) {
                    res.status(500).json({
                        message: error.message
                    })
                }
                else {
                    ppackages = JSON.parse(JSON.stringify(packages))
                    var packagePrice, priceinINR, priceinNGN;
                    ppackages.map(p => {

                        if (p.supplier_currency == "INR") {
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "JPY") {
                            packagePrice = p.price / data.JPY;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;



                        } else if (p.supplier_currency == "CAD") {
                            packagePrice = p.price / data.CAD;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "OMR") {
                            packagePrice = p.price / data.OMR;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "NGN") {
                            packagePrice = p.price / data.NGN;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "EUR") {
                            packagePrice = p.price / data.EUR;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "KWD") {
                            packagePrice = p.price / data.KWD;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "GBP") {
                            packagePrice = p.price / data.GBP;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "CHF") {
                            packagePrice = p.price / data.CHF;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "BHD") {
                            packagePrice = p.price / data.BHD;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "AUD") {
                            packagePrice = p.price / data.AUD;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        } else if (p.supplier_currency == "USD") {
                            packagePrice = p.price / data.USD;
                            packagePrice = p.price / data.INR;
                            priceinINR = packagePrice * data.INR;
                            priceinNGN = packagePrice * data.NGN;


                        }
                        p.priceINR = Math.ceil(priceinINR);
                        p.priceUSD = Math.ceil(packagePrice);
                        p.priceNGN = Math.ceil(priceinNGN);
                    })
                    res.status(200).json({
                        data: ppackages,
                        message: 'Packages fetched successfully'
                    })
                }
            })

        }
    })
}),

    router.post('/', (req, res) => {
        Package.create(req.body, (error, response) => {
            if (error) {
                res.status(500).json({
                    message: error.message
                })
            }
            else {
                res.status(201).json({
                    message: 'Added package to the DB',
                    data: response
                })
            }
        })
    })

module.exports = router;