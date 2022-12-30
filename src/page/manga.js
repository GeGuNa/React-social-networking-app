import React from 'react'
import { Link, useParams } from 'react-router-dom'



function Manga() {
	
  const params = useParams();
	
	
  return (
   <div className="App">
   Manga {params.id} <br/>
   <Link to="/">Home</Link> 
   <Link to="/login">Login</Link> 
   <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Manga;
