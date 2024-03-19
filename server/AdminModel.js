import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const adminschema=new Schema({
    "name" : String,
    "password" :String,
    "email" : String
});

export const Admin=mongoose.model("admin",adminschema); 