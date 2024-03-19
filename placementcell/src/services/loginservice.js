import axios from 'axios';
export  async function login(credentials){
    
    const response = await axios.post("http://127.0.0.1:1649/login",credentials);
    return response.data;
}