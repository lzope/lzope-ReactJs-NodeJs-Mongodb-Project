import axios from 'axios' ;
export async function fetchCell()
{
    try{
        const response1 = await axios.get("http://127.0.0.1:1649/celllist");
        return response1.data; 
    }catch(error){
        console.log(error);
    }
}

export async function saveCell(cellData)
{
    try{
        const response1 = await axios.post("http://127.0.0.1:1649/cellregister",cellData);
        return response1.data; 
    }catch(error){
        console.log(error);
    }
}


export async function deleteCell(cellemail)
{
    try{
         const response1 = await axios.delete( `http://127.0.0.1:1649/celllist/${cellemail}`  );
        return response1.data;
        
    }catch(error){
        console.log(error);
    }
}

export async function fetchjobs()
{
    try{
        const response1 = await axios.get("http://127.0.0.1:1649/studentjobs");
        return response1.data; 
    }catch(error){
        console.log(error);
    }
}

