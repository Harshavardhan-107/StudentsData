const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const Student = require("./model/Students.js");
const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
const URI = "mongodb://localhost:27017/Mernworkshop";
const cors = require("cors");
app.use(cors());
mongoose.connect(URI).then(
    ()=>console.log("db connected")
).catch(err=>console.log(err));
app.get('/', (req, res) => {
 res.send('Hello, Express.js!');
});
//impliment the routers, crud operations
app.get('/getStudent',async(req,res)=>{
    try{
        const allStudents = await Student.find();
        return res.json(allStudents);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error:'internal server error'})
    }
});
app.post('/addstudent',async(req,res) =>{
    const {sname,age,grade} = req.body;
    try{
        const newStudent = new Student({sname,age,grade});
        await newStudent.save();
        //every new student move to the all student ultimately
        //all students should be return
        const allStudents = await Student.find();
        return res.json(allStudents); 
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error:'Internal server error'});
    }
});
app.post('/addStudent',(req,res)=>{
 res.send("<h1>you can post the content</h1>")
});
app.put('/updateStudent',(req,res)=>{
 res.send("<h1>you can update the content</h1>")
});
app.delete('/deleteStudent',(req,res)=>{
 res.send("<h1>you can delete the content</h1>")
});
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`)
});