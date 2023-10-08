import axios from 'axios';
export const Table=async()=>
{
     // alert("axios called")
    const url="http://localhost:1234/dept/CSE";  
    const temp=await axios.get(`${url}`);
    console.log(temp.data)
    return temp;
}