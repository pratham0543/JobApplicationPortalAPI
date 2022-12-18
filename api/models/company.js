const mongooose=require('mongoose')

const companySchema=new mongooose.Schema(
    {
        _id:mongooose.Schema.Types.ObjectId,
        name:mongooose.Schema.Types.String,
        email:mongooose.Schema.Types.String,
        password:mongooose.Schema.Types.String

    }
)

module.exports=mongooose.model("companyUsers",companySchema);