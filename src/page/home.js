import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Main } from './funcs.js'



export function Pstwdtls({pic, text, date,prflpic,prflname,like,share,comment}) {
	
return (<>



<div className="czlast">

<div className="left cz_pdng21"><img src={pic}/></div>

<div className="cz_datq_pdngaz">
<div>{text}</div>
</div>


<div className="left cz_datq_pdngazz">
<img src={prflpic} width="25" height="25"/>  <a href="">{prflname}</a>
</div>

<div className="left cz_datq_pdngazz mnlstgnd cz_2z">{date}</div>

<div className="right" id="rght_details" style={{paddingRight: '10px'}}>
<span><svg className="cp_share_11"></svg> {share}</span>
<span><svg className="cmnts_otqz22"></svg> {comment}</span>
<span><svg className="lzzzf123a_22"></svg> {like} </span>
</div>
</div>


</>)
}






export function Shwpfr({pic}) {
	
return (<div><img src={pic}/></div>)
}



function Home() {
	
const [cz, Setcz] = useState({aba:'15',baba:'25'})	
	
 return (<>
  
  
<Main>

<div class="col-9 rnmg24_nw">



<div class="row" style={{marginTop: '10px'}}>
	
	


<div class="col-12">


<div class="c123czt13afqfz_22">Randomly chosen users</div>


<div class="row">

<div class="col-6">

<div class="c123czt13afqf">

<div class="TiTle">
Girls You may know 
</div>



<div class="c13zzzz_all_items cqwezzz22itmnlst">

<Shwpfr pic={'pics/CYjP_-UxpPs.jpg'}/>
<Shwpfr pic={'pics/CYjP_-UxpPs.jpg'}/>
<Shwpfr pic={'pics/CYjP_-UxpPs.jpg'}/>
<Shwpfr pic={'pics/CYjP_-UxpPs.jpg'}/>

</div>

<div class="rnmg31">
<a href="" class="rnmg32">See all</a>
</div>

</div>
	

</div>



<div class="col-6">

<div class="c123czt13afqf">

<div class="TiTle">
Boys You may know 
</div>



<div class="c13zzzz_all_items cqwezzz22itmnlst">

<Shwpfr pic={'pics/CYjP_-UxpPs.jpg'}/>
<Shwpfr pic={'pics/CYjP_-UxpPs.jpg'}/>
<Shwpfr pic={'pics/CYjP_-UxpPs.jpg'}/>
<Shwpfr pic={'pics/CYjP_-UxpPs.jpg'}/>


</div>

<div class="rnmg31">
<a href="" class="rnmg32">See all</a>
</div>

</div>
	


</div>


</div>	
	
	
	
	

<div class="col-12">


<div class="cz_datq">





<Pstwdtls 
pic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'} 
text={'qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe'} 
date={'2023-01-11'} 
prflpic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'}
prflname={'Michelle'} 
like={15} 
share={25} 
comment={35}

 />
 
 
 <Pstwdtls 
pic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'} 
text={'qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe'} 
date={'2023-01-11'} 
prflpic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'}
prflname={'Michelle'} 
like={15} 
share={25} 
comment={35}

 />
 
 
 <Pstwdtls 
pic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'} 
text={'qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe'} 
date={'2023-01-11'} 
prflpic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'}
prflname={'Michelle'} 
like={15} 
share={25} 
comment={35}

 />
 
 <Pstwdtls 
pic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'} 
text={'qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe'} 
date={'2023-01-11'} 
prflpic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'}
prflname={'Michelle'} 
like={15} 
share={25} 
comment={35}

 />
 
 <Pstwdtls 
pic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'} 
text={'qwecqwecqweqwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe qwecqwecqwe'} 
date={'2023-01-11'} 
prflpic={'/pics/d281cf9550d6abc5e3824f6b55e57983.jpg'}
prflname={'Michelle'} 
like={15} 
share={25} 
comment={35}

 />








</div>



	
</div>
		
	
	
	

</div>
	



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		

		</div>



</div>


<div className="col-3">


	<form className="frmcl" style={{marginTop:'0px'}}>
		
		<div>Email & Phone</div>
		<input type="text" className="login" name="user"/>
				
		<div>Password</div>
		<input type="text" className="login" name="pass"/>
		<div></div>
		<button className="btn1 btn3">Enter</button>
		
<div  className="pdng10"> <Link className="btn2 alnk21" to="/signup">Registration</Link></div>
	  
		<div> Forget password? <a class="">Recovering</a></div>
		</form>
		
		



</div>

  
 </Main> 
   
    
    </>
    
    
  );
}

export default Home;
