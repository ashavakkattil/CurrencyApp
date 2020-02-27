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



module.exports = router