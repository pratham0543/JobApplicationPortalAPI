const mongoose=require('mongoose');


const newCandidate=new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:mongoose.Schema.Types.String,
        email:mongoose.Schema.Types.String,
        password:mongoose.Schema.Types.String,
        number:mongoose.Schema.Types.Number,

    }
)
module.exports=mongoose.model('candidateUsers',newCandidate);