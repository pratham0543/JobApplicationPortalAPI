const express=require("express")
const app=express();
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const compSignup=require('./api/routes/companySignUp');
const canSignup=require('./api/routes/candidateSignUp');
const compLogin=require('./api/routes/companyLogin');
const canLogin=require('./api/routes/candidateLogin');
const postJob=require("./api/routes/companyJobs")
const application=require('./api/routes/jobApplications')

const cors=require('cors');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://PRATHAM:PRATHAM@cluster0.wqjrp4i.mongodb.net/job_application_portal?retryWrites=true&w=majority')
    .then(result=>console.log("Connected"))
    .catch(err=>console.log(err))
//for candidatelogin
//route is /candidate/login
//route is /company/signup
app.use("/company/signup",compSignup);
app.use("/company/login",compLogin);

app.use("/candidate/login",canLogin);
app.use("/candidate/signup",canSignup);

app.use("/company/postjob",postJob);

app.use("/candidate/apply",application);

app.use((req,res)=>
{
    res.status(200).json({mes:"Source Not Found! Home route"})
})
module.exports=app;