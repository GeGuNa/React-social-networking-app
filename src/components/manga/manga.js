import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'



function Manga() {
	

const params = useParams();
  
if (isNaN(params.id)) {

return (<Navigate to="/" replace={true} />)
  
} else {
	return (<Manga_view id={Math.abs(params.id)}/>);
}
  
}


function Manga_view() {
	
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
