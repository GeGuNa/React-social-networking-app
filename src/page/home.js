import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Left_menu, Footer } from './funcs.js'



function Home() {
	
const [cz, Setcz] = useState({aba:'15',baba:'25'})	
	
  return (<>
  
  
<Nav/>
  
<div className="col-12">


<div className="row g-0">


<div className="col-2" id="lmenu">


<Left_menu/>


</div>


<div className="col-10">

<div className="nlnch2">Right now at online: <a href="#">1252</a></div>



<div className="row">

<div className="col-9">




<div className="row" style={{marginTop:'10px'}}>

<div className="col-2">
<div style={{float:'left'}}> <img width={40} src="/pics/d281cf9550d6abc5e3824f6b55e57983.jpg"/> </div>
<div style={{float:'left',lineHeight:'1.2'}}> 

<div>qweqweqwe </div>
<div>qweqweqwe </div>
<div>qweqweqwe </div>

</div>


</div>




<div className="col-10">

<div className="" style={{float:'right'}}>
აბა125267890
</div>

</div>






</div>





</div>





<div className="col-3">


	<form className="frmcl">
		
		<div>Email & Phone</div>
		<input type="text" className="login" name="user"/>
				
		<div>Password</div>
		<input type="text" className="login" name="pass"/>
		<div></div>
		<button className="btn1 btn3">Enter</button>
		
<div  className="pdng10"> <a className="btn2 alnk21">Registration</a></div>
	  
		
		</form>
		
		



</div>


</div>


</div>






</div>



</div>  
  
  
 <Footer/> 
   
    
    </>
    
    
  );
}

export default Home;
