import './style.css';
import React, { useState } from 'react';


const Login = () => {
    const [formData, setFormData] = useState({
      // Initialize form fields
      email: '',
      password: '',
      // Add more fields as needed
    });
  
const handleInputChange = (e) => {
      const { email, password } = e.target;
      setFormData({ ...formData, [email]: password });  
    };
  
const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Form submitted successfully!');
          // Optionally, you can redirect the user or perform other actions upon successful submission
        } else {
          console.error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

return(
    <>
   <html>
<head>
    <title>Login</title>
    
</head>
<body>
    <div class="Wrapper">
        <h2>Login</h2>
        <form class="login-form" action={handleSubmit} method="POST">

	
            <div class="input-box">
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email"/>
                
            </div>
            <div class="input-box">
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} required placeholder="Password"/>
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


export default Login;