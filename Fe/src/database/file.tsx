import instance from "./axios";
const postImage = async(data:any)=>{
    try {
        const response= await instance.post(`/upload`,data)
 
        return response.data
    } catch (error) {
        console.log(error);
        
    }
    
}
export  default   postImage 
