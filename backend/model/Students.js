const mongoose = require('mongoose');
const Students = mongoose.Schema(
    {
        sname:String,
        age:Number,
        grade:String,
    }
);
const Student = mongoose.model("Student",Students)
module.exports=Student;