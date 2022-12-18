const mongoose=require('mongoose');
const newApplication=new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:mongoose.Schema.Types.String,
        number:mongoose.Schema.Types.Number,
        email:mongoose.Schema.Types.String,
        role:mongoose.Schema.Types.String,
        company:mongoose.Schema.Types.String
    }
)
module.exports=mongoose.model('jobApplicants',newApplication);
