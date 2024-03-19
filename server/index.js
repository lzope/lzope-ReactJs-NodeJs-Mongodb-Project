import express from 'express';
import mongoose from 'mongoose';
import {Student} from './StudentModel.js';
import {Admin} from './AdminModel.js';

import {Cell} from './CellModel.js';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';





const api=express();
api.use(cors());

api.get('/studentlist',async(request,response)=>{
     
    try{
        const students=await Student.find();
        response.send({students:students});
        
    }catch(error)
        {
            response.send("Something went wrong"); 
        }
})

api.get('/celllist',async(request,response)=>{
     
    try{
        const cells=await Cell.find();
        response.send({cells:cells});
        
    }catch(error)
        {
            response.send("Something went wrong"); 
        }
})
api.get('/studentjobs',async(request,response)=>{
     
    try{
        const celljobs=await Cell.find();
        response.send({cells:celljobs});
        
    }catch(error)
        {
            response.send("Something went wrong"); 
        }
})


api.use(express.json());

const connectDB = async() =>{
    try{
         await  mongoose.connect('mongodb://127.0.0.1:27017/placementportal');
        console.log("Database connected to placementportal");
    }catch(error)
        {
            console.log(error);
        }
   
}




api.post('/login',async(request,response)=>{
    try{
        const user = await Student.findOne({email:request.body.email});
        
        if(user)
        {
            const userpassword=user.password;
          if(userpassword == request.body.password){
              response.send(true);
          }
            else{
               response.send(false);
            }
        }
        else{
           response.send(false);
        }
        
        
    }catch(error){
        console.log(error);
    }
})

api.post('/register',async(request,response)=>{
    try{
    const  reqdata= request.body;
    const studentdata= new Student(reqdata);
        await studentdata.save();
        console.log(reqdata);
        response.send("Data Inserted!");
        
    }catch(error)
        {
            console.log(error);
        }
})


api.post('/cellregister',async(request,response)=>{
    try{
    const  reqcelldata = request.body;
    const celldata= new Cell(reqcelldata);
        await celldata.save();
        console.log(reqcelldata);
        response.send("Data Inserted!");
        
    }catch(error)
        {
            console.log(error);
        }
})


api.delete("/studentlist/:prn",async(request,response)=>{
    try{
        await Student.deleteOne({prn:request.params.prn});
        response.send("Student deleted from backed!");
        
    }catch(error){
        
    }
})
api.get("/studentlist/:prn",async(request,response)=>{
    try{
       const data= await Student.findOne({prn:request.params.prn});
        response.send(data);
        
    }catch(error){
        console.log(error);
    }
})
api.post("/updatestudent/:prn",async(request,response)=>{
    try{
        const data = await Student.findOneAndUpdate({prn:request.params.prn},request.body,{new:true});
      
        response.send(data);
        
    }catch(error){
        console.log(error);
    }
})


api.delete("/celllist/:cellemail",async(request,response)=>{
    try{
        await Cell.deleteOne({cellemail:request.params.cellemail});
        response.send("Student deleted from backed!");
        
    }catch(error){
        
    }
})

api.put("/studentlist/:prn",async(request,response) =>{
    try{
        
    }catch(error){
        console.log(error);
    }
})



api.listen(1649,()=>{
    console.log("server started on port:1649");
    connectDB();
})