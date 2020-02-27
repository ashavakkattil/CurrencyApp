const express = require('express');
const router = express.Router();

const Package = require('../models/package');

router.get('/', (req, res) => {
    Package.find({}, (error, packages) => {
        if (error) {
            res.status(500).json({
                message: error.message
            })
        }
        else {
            res.status(200).json({
                data: packages,
                message: 'Fetched successfully'
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