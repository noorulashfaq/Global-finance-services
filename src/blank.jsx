
const Vijay=()=>
{return(
    <>
   <html>
<head>
    <title>Login</title>
    
</head>
<body>
    <div class="Wrapper">
        <h2>Login</h2>
        <form class="login-form" action="login_process.php" method="POST">

	
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

export default Vijay


