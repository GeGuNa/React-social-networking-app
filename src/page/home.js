import { useState } from 'react'
import { Link } from 'react-router-dom'



function Home() {
	
const [cz, Setcz] = useState({aba:'15',baba:'25'})	
	
  return (<>
    <div className="App">
   Test1  {cz.aba} <br/>
   Test2  {cz.baba}
    </div>
    
    
   
    
    
    <br/>
   
   <Link to="/">Home</Link>  
   <Link to="/login">Login</Link>   
   <Link to="/signup">Sign up</Link> 
    
    </>
    
    
  );
}

export default Home;
