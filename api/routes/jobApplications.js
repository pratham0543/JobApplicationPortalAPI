const mongoose = require('mongoose');
const newApplicant = require('../models/jobApplications');
const express = require('express');
const { removeListener } = require('../models/company');
const router = express.Router();

router.get('/', (req, res) => {
    newApplicant.find()
        .then(result => res.status(200).json({ entries: result }))
        .catch(err => res.status(404).json({ error: err }));
})



router.post('/', (req, res) => {
    const email = req.body.email;
    newApplicant.find({ email: email })
        .then(result => {
            if (result.length !== 0) {
                res.status(400).json({ mes: "Email already exist, try again with a different email" });
            }
            else{
                const newJobApplication=new newApplicant(
                    {
                        _id:mongoose.Types.ObjectId(),
                        name:req.body.name,
                        number:req.body.number,
                        email:email,
                        role:req.body.role,
                        company:req.body.comp

                    }
                )
                newJobApplication.save()
                .then(result=>res.status(201).json({mes:"Application posted successfully",result:result}))
                .catch(err=>res.status(500).json({error:"Server encountered an error"}))
            }
        })
        .catch(err=>res.status(500).json({error:"Server encountered an error"}))
})


module.exports=router;