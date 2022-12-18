const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const newJob=require('../models/jobs');


router.post('/',(req,res)=>
{
    const job=new newJob(
        {
            _id:new mongoose.Types.ObjectId(),
            company_name:req.body.comp_name,
            position:req.body.pos,
            skills:req.body.skills,
            job_desc:req.body.job_desc,
           
        }
    )
    job.save()
    .then(result=>{
        res.status(201).json({mes:"Job Posted!",result:result})
    })
    .catch(err=>
        {
            res.status(500).json({mes:"Server encountered an Error"})
        })


    }
)



router.get('/',(req,res)=>
{


    newJob.find()
    .then(result=>
        {
            res.status(200).json({entries:result})
        })
        .catch(err=>res.status(404).json({mes:"Not found"}));
    
})

module.exports=router;