import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className="App">
   Login <br/>
   
   <Link to="/">Home</Link> 
   <Link to="/login">Login</Link> 
   <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Login;
