
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './sty.css';
import {Table} from './connect';
import React, { useState, useEffect} from 'react';
// import { useNavigate } from 'react-router';
// Import Bootstrap CSS

  

const FacultyDashboard = () => {
    // const navi=useNavigate();
    // conts[getname(variable),setname(FUNCTION)]=useState(initialized)
    const[allvalues,setAllvalues]=useState([]);

    useEffect(async()=>{
        const res=await Table()
        setAllvalues(res.data)
    },[])
   
  return (
    <>

    <html lang="en">
     
    <head className="head">
      
    
      <div className="logosect">
       <h1>_</h1>
        <div className="logo"> Welcome</div>
        <img
          src="https://mec.edu.in/wp-content/uploads/2021/02/main-logo.png"
          className="icn menuicn"
          id="menuicn"
          alt="MenuIcon"
        />
      </div>
   
       
     
    </head>
    <body>

     
    <div className="main">

        <div style={{marginTop:'100px'}}>
    
                <div className="box-container">
     
                    <div className="box box1"id="ecr">
                        
                            <h2 className="topic-heading" >ECR</h2>
    
                           
                      
     
                      
                    </div>
                    <div className="box box4"id="ecr">
                        
                        <h2 className="topic-heading" >SeSTA</h2>

                       
                  
 
                  
                </div>
                <div className="box box1"id="ecr">
                        
                        <h2 className="topic-heading" >ProSAC</h2>

                       
                  
 
                  
                </div>
     
                    <div className="box box2" id ="set">
                       
                            <h2 className="topic-heading" id="tt">SeTAF</h2>
           
                          
                     
     
                       
                       
                </div>
    </div>
    </div>
    
     
                <div className="report-container">
                    <div className="report-header">
                        <h1 className="recent-Articles">Your Reports</h1>
                     </div>   
                        <div>
   
                        <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th>ECR id</th>
                            <th>Event Type</th>
                            <th>Title</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allvalues.map((data)=>
                            (
                                <tr>
                                    
                                        
                                    
                                    
                                    <td>{data.id}</td>
                                    <td>{data.event_name}</td>
                                    <td>{data.title}</td>
                                    <td>{data.date}</td>
                                    <td>
                                        
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
     
    </div>
    
                   
                    </div>
     
               
    </div>
    </body>
    </html>
        
         </>  
  );
};


export default FacultyDashboard