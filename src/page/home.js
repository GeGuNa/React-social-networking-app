import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Main } from './funcs.js'



function Home() {
	
const [cz, Setcz] = useState({aba:'15',baba:'25'})	
	
 return (<>
  
  
<Main>

<div class="col-9 rnmg24">


<div class="nlnch2">Right now at online: <a href="#">1252</a></div>

</div>


<div className="col-3">


	<form className="frmcl" style={{marginTop:'0px'}}>
		
		<div>Email & Phone</div>
		<input type="text" className="login" name="user"/>
				
		<div>Password</div>
		<input type="text" className="login" name="pass"/>
		<div></div>
		<button className="btn1 btn3">Enter</button>
		
<div  className="pdng10"> <a className="btn2 alnk21">Registration</a></div>
	  
		
		</form>
		
		



</div>

  
 </Main> 
   
    
    </>
    
    
  );
}

export default Home;
