 
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_SERVER
interface Login {
    username: string;
    password: string;
}
const login = async(data:Login)=>{
    try {
        const response= await axios.post(`${apiUrl}/auth/users`,data)
 
        return response.data
    } catch (error) {
        console.log(error);
        
    }
    
}
export  default login