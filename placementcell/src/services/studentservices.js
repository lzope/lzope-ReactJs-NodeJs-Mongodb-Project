import axios from 'axios' ;
export async function fetchStudents()
{
    try{
        const response = await axios.get("http://127.0.0.1:1649/studentlist");
        return response.data; 
    }catch(error){
        console.log(error);
    }
}

export async function saveStudents(studentData)
{
    try{
        const response = await axios.post("http://127.0.0.1:1649/register",studentData);
        return response.data; 
    }catch(error){
        console.log(error);
    }
}

export async function deleteStudent(prn)
{
    try{
         const response = await axios.delete( `http://127.0.0.1:1649/studentlist/${prn}`  );
        return response.data;
        
    }catch(error){
        console.log(error);
    }
}
export async function Editdata(prn)
{
    try{
        const response = await axios.get( `http://127.0.0.1:1649/studentlist/${prn}`  );
       return response.data;
       
   }catch(error){
       console.log(error);
   }
}

export async function updateStudents(formdata,prn)
{
    try{
        const response = await axios.post( `http://127.0.0.1:1649/updatestudent/${prn}`,formdata  );
       return response.data;
       
   }catch(error){
       console.log(error);
   }
}

