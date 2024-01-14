 
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_SERVER
interface Register {
    username: string;
    password: string;
    email: string;
    fullname: string;
  }
const Register = async(data:Register)=>{
    try {
        const response= await axios.post(`${apiUrl}/users`,data)
        return response.data
    } catch (error) {
        console.log(error);
        
    }
    
}
export  default Register