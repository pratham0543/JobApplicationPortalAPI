const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const candidateSchema = require('../models/candidate')

router.post('/', (req, res) => {
    const candEmail = req.body.email;
    candidateSchema.find({ email: candEmail })
        .then(result => {
            if (result.length === 0) {
                res.status(400).json({ mes: "User does not Exist" })
            }
            else {
                if (result[0].password === req.body.password) {
                    res.status(201).json({mes:'User Authenticated!'})
                }
                else
                res.status(400).json({mes:'User Authentication Failed!'})

            }

        }

        )
        .catch(err => res.status(500).json({ mes: "Server encountered an error" }))
})

router.get("/", (req, res) => {
    res.status(200).json({ mes: "candLogin" })
})
module.exports = router;