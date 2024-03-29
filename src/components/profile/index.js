import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './Prof.css'


export function Shwimg({pic, alt}){
	return <div style={{ paddingRight: '10px', marginBottom:'3px'}}><img alt={alt} src={pic}/></div>
}



export function Showfrndofps({pic, alt, name}){
	return (<> 
	
	
<div>

<div>

<div><img src={pic} alt={alt} className="cProfFrRightListFlxcolPHtround"/>	</div> 

<div className="CprqweCLrqcnt"><Link className="CprqweCLrq" to="/">{name}</Link></div>

</div>

</div>

	
</>)
}

function Profile() {
	

 const params = useParams();
  
if (isNaN(params.id)) {

return (<Navigate to="/" replace={true} />)
  
} else {
	return (<Profile_view id={Math.abs(params.id)}/>);
}
  
}


export function Profile_view({id}) {

return (<>
  
  
<Main>






<div className="col-9">

<div className="rnmg24">


<div>
<img src="/pics/0oRxrSt0fdw.jpg" className="rnmg25"/>
</div>



<div className="qwe12313">

<div>
	
<div className="rnmg26"><img src="/pics/0oRxrSt0fdw.jpg" className="rnmg27"/></div>




<div className="rnmg28">
<div className="rnmg29">Mariam koberidze</div>

{id == 1 ? 
	(
<div><a href="">Add information about yourself </a></div>) : '' 
}

<div>Followers: <a href=""><b>15</b></a> Followings: <a href=""><b>155</b></a></div>
</div>

</div>


<div className="c213z213qwe">
	
	<div>
	
	<button className="btn32"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> Message</button>
	</div>
	
	
	<div>
		
		<button className="btn32"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="23" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg> Add friend</button>
	
	</div>
	
	
	<div>
		
		<button className="btn32"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="23" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z"></path></svg> Call</button>
	
	</div>
	
	
	
</div>




</div>



<div className="c123zdspltzc123">
<div><a href="">Home</a></div>
<div><a href="">About</a></div>
<div><a href="">Members</a></div>
<div><a href="">Videos</a></div>
<div><a href="">Posts</a></div>
<div><a href="">More</a></div>
</div>

</div>


<div className="c123czt13afqf" style={{ marginTop: '15px'}}>

<div className="c13zzzz_all_items">

<div className="cqz active">Photos</div>
<div className="cqz">Videos</div>
<div className="cqz">Music</div>
<div className="cqz">Topics</div>

</div>



<div className="c13zzzz_all_items cqwezzz22itmnlst">


<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>
<Shwimg pic={'/pics/CYjP_-UxpPs.jpg'} alt={'Imgage of someone'}/>






</div>

<div className="rnmg31">
<a href="" className="rnmg32">See all</a>
</div>

</div>




<div className="col-12"> 




	<div class="col-12">


<div class="snacks6">


<div class="ce12524">


<div>

<div class="left snacks7"><img class="brdr21" src="/pics/KXTvmL_0KAs.jpg" width="50" height="50"/>	</div>
	
<div class="left snacks8"> 
	<div><a href="">Nini koberidze</a></div>	
	<div><span class="snacks9">6 Jan at 2:00 am</span></div>	
</div>	


<div class="right snacks10"> 
	<div><a href="#"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg> </a></div>		
</div>	




<div class="crlrbth">
			
			<div class="text">
	
				Nice very nice, i like this one !!!</div>
			
			
			
			</div>



<div class="pstfl">
			
			
			<div>
				
				<div class="czinlwqeq">
			    <div class="hrt1"> </div>
				<div class="cz2z_fnt"> 25 </div>
				</div>
				

			</div>
			
		
		
			
			
						<div>
				
				<div class="czinlwqeq">
			    <div class="cmntz_on_cwpad"> </div>
				<div class="cz2z_fnt"> 35 </div>
				</div>
				

			</div>
			
			
				
				
				<div>
				
				<div class="czinlwqeq">
			    <div class="cp_share"> </div>
				<div class="cz2z_fnt"> 35 </div>
				</div>
				

			</div>
			
			

<div class="right c123c1add"><svg stroke="currentColor" fill="#c4c8cd" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg> 35</div>



			
			</div>









</div>
























</div>





</div>

</div>






<div class="col-12">


<div class="snacks6">


<div class="ce12524">


<div>

<div class="left snacks7"><img class="brdr21" src="/pics/KXTvmL_0KAs.jpg" width="50" height="50"/>	</div>
	
<div class="left snacks8"> 
	<div><a href="">Nini koberidze</a></div>	
	<div><span class="snacks9">6 Jan at 2:00 am</span></div>	
</div>	


<div class="right snacks10"> 
	<div><a href="#"> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg> </a></div>		
</div>	




<div class="crlrbth">
			
			<div class="text">
	
				Pretty girl ❤️❤️❤️
				</div>
			
			
			<div class="img_detected_on_pst">
			<img src="/pics/jJ7g1VXRvqw.jpg"/>
			</div>
			
			
			</div>




<div class="pstfl">
			
			
			<div>
				
				<div class="czinlwqeq">
			    <div class="hrt1"> </div>
				<div class="cz2z_fnt"> 25 </div>
				</div>
				

			</div>
			
		
		
			
			
						<div>
				
				<div class="czinlwqeq">
			    <div class="cmntz_on_cwpad"> </div>
				<div class="cz2z_fnt"> 35 </div>
				</div>
				

			</div>
			
			
				
				
				<div>
				
				<div class="czinlwqeq">
			    <div class="cp_share"> </div>
				<div class="cz2z_fnt"> 35 </div>
				</div>
				

			</div>
			
			

<div class="right c123c1add"><svg stroke="currentColor" fill="#c4c8cd" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg> 35</div>



			
			</div>








</div>
























</div>





</div>

</div>
	
	






























 </div>













</div>
	

<div className="col-3">


<div className="rnmg30">

<div className="t21">Gifts <Link to="/gifts"> <b>5000</b> </Link></div>


<div className="prfrmn">


<div>
<img src="/gifts/256 (9).jpg" width="80" height="80"/>	
</div>


<div>
<img src="/gifts/256 (7).jpg" width="80" height="80"/>	
</div>


<div>
<img src="/gifts/256.jpg" width="80" height="80"/>	
</div>


<div>
<img src="/gifts/256.jpg" width="80" height="80"/>	
</div>


<div>
<img src="/gifts/256.jpg" width="80" height="80"/>	
</div>


<div>
<img src="/gifts/256.jpg" width="80" height="80"/>	
</div>


<div>
<img src="/gifts/256 (1).jpg" width="80" height="80"/>	
</div>


<div>
<img src="/gifts/256 (4).jpg" width="80" height="80"/>	
</div>

</div>


<div className="rnmg31">
<Link to="/" className="rnmg32">All gifts</Link>
</div>


</div>










<div className="rnmg33">


<div className="rprflmn">


<div><Link to="/">News</Link></div>
<div><Link to="/">Reactions</Link></div>
<div><Link to="/">Search</Link></div>
<div><Link to="/">My page</Link></div>

</div>






</div>









<div className="cProfFrRight">

<div className="cfRlsTTl">Friends <Link to="/" className="cfRlsTTlNk"> 1,128 </Link></div>


<div className="cProfFrRightList">




<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>
<Showfrndofps pic={'/pics/KXTvmL_0KAs.jpg'} name={'George'} alt={'Some pic who knows'}/>


</div>



</div>





<div className="Cz134z_22">


<div className="cfRlsTTl"> <span>Following</span> <Link to="/" className="cfRlsTTlNk"> 1,128 </Link> </div>




<div className="cZQEFlWEQ22">



<div>

<div><img className="brdr21" src="/photos/CYjP_-UxpPs.jpg" alt="qweqweq" width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><Link to="/" className="CZD_11zz">Not everyone will understand</Link></div>	
	<div className="CZr_desc">Dont need description</div>	
</div>	

</div>



<div>

<div><img className="brdr21" src="/photos/CYjP_-UxpPs.jpg" alt="qweqweq" width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><Link to="/" className="CZD_11zz">Miss Universe :D</Link></div>
	<div className="CZr_desc">Without description</div>	
</div>	



</div>



<div>

<div><img className="brdr21" src="/photos/CYjP_-UxpPs.jpg" alt="qweqweq" width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><Link to="/" className="CZD_11zz">Japanese culture</Link></div>	
	<div className="CZr_desc">Everything about Japan</div>	
</div>	



</div>





</div>








</div>









	
	

</div>	



	</Main>
    
    </>
    
    
  );
  
}



export default Profile;
