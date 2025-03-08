import axios from "axios";

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getAllPosts: async () =>{
        try{
            let response = await http.get('/posts');
            return response.data;
        }catch(error){
            console.error(error);
        }
    },
    addNewPost: async (title: string, body: string, userId: number)=>{
        try{
            let response = await http.post('/posts',{
                title, body, userId
            });
            return response.data;  
        }catch(error){
            console.log(error)
        }
        
    }
}