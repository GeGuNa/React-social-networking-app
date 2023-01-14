import React from 'react'
import { Link } from 'react-router-dom'
import { Main } from './funcs.js'
import { useCookies } from 'react-cookie'




function Login() {

const [email, Setemail] = React.useState("")
const [pass, Setpass] = React.useState("")



const [cookies, setCookie] = useCookies()	
	
	
/*React.useMemo(() => {	

	setCookie('name','baha')
	
	console.log(cookies)
	
},[setCookie, cookies])	*/


const smail = (event) => Setemail(event.target.value)
const spass = (event) => Setpass(event.target.value)
  
   
  function handleButton(event){
    setCookie('login', email)
    setCookie('pass', pass)
    event.preventDefault()
  }


  return (
<Main>

<div className="col-12">
			
			
			
		<div className="row">
		
		
		<div className="col-9">
		
		
		
			<div className="row" style={{marginTop: '10px'}}>
	
	


<div className="col-12 mnlstgnd">



<div className="auth_nv">
<img src="pics/main.png" width="30"/> Login
</div>
	


<div className="auth_nv2">
<div className="active"><Link to="/login">Login</Link></div>
<div><Link to="/signup">Registration</Link></div>
</div>
	
	
	
	
<div className="forma">
	
<div className="Entrst">Enter to the site</div>	


<form>
	
<input type="text" value={email} onInput={smail} placeholder="Email" maxLength="129"/> <br/>
<input type="text" value={pass} onInput={spass} placeholder="Password" maxLength="129"/> <br/>



 <br/>

<button onClick={handleButton}>Testqeqwe</button>

</form>


</div>	




<div className="auth_lnk">

<div> <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#FFA000"><polygon points="30,41 26,45 22,45 18,41 18,21 30,21 30,29 28,31 30,33 30,35 28,37 30,39"></polygon><path d="M38,7.8C37.5,6,36,4.7,34.3,4.2C31.9,3.7,28.2,3,24,3s-7.9,0.7-10.3,1.2C12,4.7,10.5,6,10,7.8 c-0.5,1.7-1,4.1-1,6.7c0,2.6,0.5,5,1,6.7c0.5,1.8,1.9,3.1,3.7,3.5C16.1,25.3,19.8,26,24,26s7.9-0.7,10.3-1.2 c1.8-0.4,3.2-1.8,3.7-3.5c0.5-1.7,1-4.1,1-6.7C39,11.9,38.5,9.5,38,7.8z M29,13H19c-1.1,0-2-0.9-2-2V9c0-0.6,3.1-1,7-1s7,0.4,7,1v2 C31,12.1,30.1,13,29,13z"></path></g><rect x="23" y="26" fill="#D68600" width="2" height="19"></rect></svg> Cant you log in ? Then try <a href="#">recovering of password</a></div>

</div>	
	

</div>
	



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		

		</div>
		
			
		
		
		
		</div>
		
		
		<style>
		
		
		</style>
		
		<div className="col-3" style={{paddingRight: '20px'}}>
		
		


		
	<div className="col-12" style={{marginRight: '2px'}}>


<div className="cz_datq">


<div className="t21">New posts <a href="/"> <b>5000</b> </a></div>




<div className="right_unauth_posts czlast">
	


<div className="left cz_pdng21">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg"/>
</div>




<div className="cz_datq_pdngaz">
	
<div><a href="/">What happened in ukraine?</a></div>		
	
<div>
qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe  
</div>

</div>

<div className="kk_1"> 

<div className="left cz_datq_pdngazz">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg" width="25" height="25"/>	 <a href="/">Michell</a>  
</div>


<div className="left cz_datq_pdngazz mnlstgnd cz_2z">
 2023-01-11
</div>

<div className="right kk_2" id="rght_details">
	
<span>
<svg className="lzzzf123a_22"></svg> 15 
</span>

</div>


</div>





</div>



<div className="right_unauth_posts czlast">
	


<div className="left cz_pdng21">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg"/>
</div>




<div className="cz_datq_pdngaz">
	
<div><a href="/">What happened in ukraine?</a></div>		
	
<div>
qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe  
</div>

</div>

<div className="kk_1"> 

<div className="left cz_datq_pdngazz">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg" width="25" height="25"/>	 <a href="/">Michell</a>  
</div>


<div className="left cz_datq_pdngazz mnlstgnd cz_2z">
 2023-01-11
</div>

<div className="right kk_2" id="rght_details">
	
<span>
<svg className="lzzzf123a_22"></svg> 15 
</span>

</div>


</div>





</div>



<div className="right_unauth_posts czlast">
	


<div className="left cz_pdng21">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg"/>
</div>




<div className="cz_datq_pdngaz">
	
<div><a href="/">What happened in ukraine?</a></div>		
	
<div>
qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe  
</div>

</div>

<div className="kk_1"> 

<div className="left cz_datq_pdngazz">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg" width="25" height="25"/>	 <a href="/">Michell</a>  
</div>


<div className="left cz_datq_pdngazz mnlstgnd cz_2z">
 2023-01-11
</div>

<div className="right kk_2" id="rght_details">
	
<span>
<svg className="lzzzf123a_22"></svg> 15 
</span>

</div>


</div>





</div>




<div className="right_unauth_posts czlast">
	


<div className="left cz_pdng21">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg"/>
</div>




<div className="cz_datq_pdngaz">
	
<div><a href="/">What happened in ukraine?</a></div>		
	
<div>
qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe  
</div>

</div>

<div className="kk_1"> 

<div className="left cz_datq_pdngazz">
<img src="pics/d281cf9550d6abc5e3824f6b55e57983.jpg" width="25" height="25"/>	 <a href="/">Michell</a>  
</div>


<div className="left cz_datq_pdngazz mnlstgnd cz_2z">
 2023-01-11
</div>

<div className="right kk_2" id="rght_details">
	
<span>
<svg className="lzzzf123a_22"></svg> 15 
</span>

</div>


</div>





</div>






</div>



	
</div>	
		

		
			
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	
	
			

		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
		
		
		
		
		
		
		
		</div>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		</div>
		
		
		
		
			
	
		
		
		
		</div>


   
</Main>
  );
}

export default Login;
