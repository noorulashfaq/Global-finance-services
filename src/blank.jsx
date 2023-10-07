import './style.css'
import './sty.css'
const Login=()=>
{return(
    <>
   <html>
<head>
    <title>Login</title>
    
</head>
<body>
    <div class="Wrapper">
        <h2>Login</h2>
        <form class="login-form" action="/submitForm" method="POST">

	
            <div class="input-box">
                <input type="email" name="email" required placeholder="Email"/>
                
            </div>
            <div class="input-box">
                <input type="password" name="password" required placeholder="Password"/>
            </div>
            <div class="remember-forget">
                <label>
                    <input type="checkbox"/> Remember me
                </label>
               
            </div>
            <input type="submit" class="btn" value="Login"/>
            
        </form>
    </div>
</body>
</html>
    
     </>   
    )
}

const Tdash=()=>
{return(
    <>

<html lang="en">
 
<head>
  
   
    <title>Teacher Dashboard</title>
 
</head>
<body>
<header className='head'>
<div class="logosect">
            <div class="logo">Welcome</div>
            <img src=
"https://mec.edu.in/wp-content/uploads/2021/02/main-logo.png"
                class="icn menuicn"
                id="menuicn"
                alt="menu-icon"/>
        </div>
 
   
</header>
 
  
    
         <div className="main">



           
    <div style={{marginTop:'100px'}}>

            <div className="box-container">
 
                <div className="box box1"id="ecr">
                    
                        <h2 className="topic-heading" >ECR</h2>
<script>
document.getElementById("ecr").addEventListener("click", function() {
  window.location.href = "ecr.php"
});
</script>
                       
                  
 
                  
                </div>
                
 
                <div className="box box2" id ="set">
                   
                        <h2 className="topic-heading" id="tt">SeTAF</h2>
                        <script>
document.getElementById("set").addEventListener("click", function() {
  window.location.href = "setof.php"
});
</script>
                      
                 
 
                   
                   
            </div>
</div>
</div>

 
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Your Reports</h1>
                    


                </div>
                </div>
 
           
</div>
</body>
</html>
    
     </>   
    )
}

export default Login
export {Tdash}