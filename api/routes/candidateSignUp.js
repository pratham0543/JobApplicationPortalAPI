const express=require('express')
const router=express.Router();
const newCandidate=require('../models/candidate')
const mongoose=require('mongoose')
router.post('/', (req, res) => {
    const candEmail = req.body.email;
   
    newCandidate.find({ email: candEmail })
        .then(result => {
            if (result.length !== 0 ) {
                res.status(400).json({ mes: "Email already exists, try again with a different email" });
            }
            else {
                const Candidate = new newCandidate(
                    {
                        _id: new mongoose.Types.ObjectId(),
                        name: req.body.name,
                        email: candEmail,
                        password: req.body.password,
                        number:req.body.number
                    }
                )
                Candidate.save()
                    .then(result =>
                        res.status(201).json({ mes: " User Signup Successful", result: result })
                    )
                    .catch(err =>
                        res.status(500).json({ mes: " Server encountered an error", error: err })

                    );
            }

        }

        )
        .catch(err => res.status(500).json({ mes: "Server encountered an error",err:err }));
})










router.get('/',(req,res)=>
{
    res.status(200).json({mes:"Works fine /candidate/login"})
})


module.exports=router;