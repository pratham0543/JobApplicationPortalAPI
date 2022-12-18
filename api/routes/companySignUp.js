const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const companySchema = require('../models/company')






router.post('/', (req, res) => {
    const compEmail = req.body.email;
   
    companySchema.find({ email: compEmail })
        .then(result => {
            if (result.length !== 0 ) {
                res.status(400).json({ mes: "Email already exists, try again with a different email" });
            }
            else {
                const newCompanyUser = new companySchema(
                    {
                        _id: new mongoose.Types.ObjectId(),
                        name: req.body.name,
                        email: compEmail,
                        password: req.body.password
                    }
                )
                newCompanyUser.save()
                    .then(result =>
                        res.status(201).json({ mes: " User Signup Successful", result: result })
                    )
                    .catch(err =>
                        res.status(500).json({ mes: " Server encountered an error", error: err })

                    );
            }

        }

        )
        .catch(err => res.status(500).json({ mes: "Server encountered an error" }));
})

router.get("/", (req, res) => {
    res.status(200).json({ mes: "compSignup" });
})
module.exports = router;