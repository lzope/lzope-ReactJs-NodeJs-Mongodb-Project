import {Schema} from 'mongoose';
import mongoose from 'mongoose';



const cellschema=new Schema({
    cellname:String,
    cellemail:String,
    cellpassword:String,
    celllocation:String,
   
    
    
});

export const Cell = mongoose.model("cell",cellschema); 