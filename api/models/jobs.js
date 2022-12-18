const mongoose=require('mongoose');

const newJob=new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        company_name:mongoose.Schema.Types.String,
        position:mongoose.Schema.Types.String,
        skills:mongoose.Schema.Types.String,
        job_desc:mongoose.Schema.Types.String,
      
    }
)
module.exports=mongoose.model('jobs',newJob);