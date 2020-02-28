const express = require('express')
const router = express.Router();
const CurrencyRate = require('../models/currencyRate')

//Add currency rates
router.post('/', (req,res) => {
    CurrencyRate.create(req.body, (error,response) => {
        if(error){
            res.status(500).json({
                message: error.message
            })
        }
        else{
            res.status(201).json({
                message: 'Successfully Added currency rate',
                data: response
            })
        }
    })
})

//Get the latest currency rate

router.get('/', (req,res) => {
    CurrencyRate.findOne().sort({date: -1}).limit(1).exec((error, data) => {
        if(error){
            res.status(500).json({
                message: error.message
            })
        }
        else{
            res.status(200).json({
                data: data,
                message: 'Fetched successfully'
            })
        }
    })
})

module.exports = router