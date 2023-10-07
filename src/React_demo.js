import axios from 'axios';

export const Demo=async()=>
{
    const url="http://localhost:1234/fetch";
    const temp=await axios.get(`${url}`);
    
    
}