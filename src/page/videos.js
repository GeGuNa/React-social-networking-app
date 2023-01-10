import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main, Nav } from './funcs.js'



export default function Video() {
	

const params = useParams();
  
if (isNaN(params.id)) {

return (<Navigate to="/" replace={true} />)
  
} else {
	return (<Video_main id={Math.abs(params.id)}/>);
}
  
}


export function Video_main() {
	
  const params = useParams();
	
	
  return (<>
  
 
 <Nav/>
	
	<div className="col-12">
		
	<div className="row g-0">
		
		
	
	<div className="col-2 mnqwe22lzzz">
		   


<div class="mautoz_22">
	
<div class="left"><div class="cz_5zz_1"><svg class="lzzzf123a_22_vd2"></svg> Video</div></div>	
<div class="left"><div class="cz_5zz_1 cz_5zz_13z"><svg class="lzzzf123a_22_vd1"></svg> Live</div></div>			
</div>


<div class="cvdmn">

<div class="active">
<div class="left cslz123pdng"><svg class="lzzzf123a_22_vd3"></svg> </div>
<div class="left">Home</div>
</div>


<div>
<div class="left cslz123pdng"><svg class="lzzzf123a_22_vd3"></svg> </div>
<div class="left">Shorts</div>
</div>



<div>
<div class="left cslz123pdng"><svg class="lzzzf123a_22_vd3"></svg> </div>
<div class="left">Subscriptions</div>
</div>



<div>
<div class="left cslz123pdng"><svg class="lzzzf123a_22_vd3"></svg> </div>
<div class="left">Library</div>
</div>




<div>
<div class="left cslz123pdng"><svg class="lzzzf123a_22_vd3"></svg> </div>
<div class="left">History</div>
</div>




<div>
<div class="left cslz123pdng"><svg class="lzzzf123a_22_vd3"></svg> </div>
<div class="left">Your videos</div>
</div>

<div>
<div class="left cslz123pdng"><svg class="lzzzf123a_22_vd3"></svg> </div>
<div class="left">Liked videos</div>
</div>


<div>
<div class="left cslz123pdng"><svg class="lzzzf123a_22_vd3"></svg> </div>
<div class="left">Bookmarks</div>
</div>



</div>




	
		</div>
		
		
		
		<div className="col-10">
			

<div class="srchbr_3">
	
<div class="srch_br">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
</div>	
	
	
<input class="z2" type="text" placeholder="searching for the videos"/>
</div>
			





	
<div class="czd1231zz_da">
	
	
<div class="czd1231zz_d">
<div class="left"><a href="">All</a></div>
<div class="left"><a href="">Travel</a></div>
<div class="left"><a href="">Programming</a></div>
<div class="left"><a href="">Culture</a></div>
<div class="left"><a href="">Tv</a></div>
<div class="left"><a href="">Fashion</a></div>
<div class="left"><a href="">Music</a></div>
<div class="left"><a href="">Fitness</a></div>
<div class="left"><a href="">Hacking</a></div>
</div>


<div class="pvdlst">
	
	
	
	

<div>


<div>
<div><img class="cimgbrd" src="/photos/channels4_profile.jpg"/></div>	


<div class="cqweppnd">

<div class="left"><img class="cimgbrd_zz2" src="/pics/HvP81gXfstQ.jpg"/></div>

<div class="left ppc123zz">
<div><a href="">Alan Walker (Remix) - New </a></div>
<div>184K views, 1 year ago</div>
</div>


</div>



</div>


</div>




<div>


<div>
<div><img class="cimgbrd" src="/photos/channels4_profile.jpg"/></div>	


<div class="cqweppnd">

<div class="left"><img class="cimgbrd_zz2" src="/pics/HvP81gXfstQ.jpg"/></div>

<div class="left ppc123zz">
<div><a href="">Alan Walker (Remix) - New </a></div>
<div>184K views, 1 year ago</div>
</div>


</div>



</div>


</div>



<div>


<div>
<div><img class="cimgbrd" src="/photos/channels4_profile.jpg"/></div>	


<div class="cqweppnd">

<div class="left"><img class="cimgbrd_zz2" src="/pics/HvP81gXfstQ.jpg"/></div>

<div class="left ppc123zz">
<div><a href="">Alan Walker (Remix) - New </a></div>
<div>184K views, 1 year ago</div>
</div>


</div>



</div>


</div>



<div>


<div>
<div><img class="cimgbrd" src="/photos/channels4_profile.jpg"/></div>	


<div class="cqweppnd">

<div class="left"><img class="cimgbrd_zz2" src="/pics/HvP81gXfstQ.jpg"/></div>

<div class="left ppc123zz">
<div><a href="">Alan Walker (Remix) - New </a></div>
<div>184K views, 1 year ago</div>
</div>


</div>



</div>


</div>



<div>


<div>
<div><img class="cimgbrd" src="/photos/channels4_profile.jpg"/></div>	


<div class="cqweppnd">

<div class="left"><img class="cimgbrd_zz2" src="/pics/HvP81gXfstQ.jpg"/></div>

<div class="left ppc123zz">
<div><a href="">Alan Walker (Remix) - New </a></div>
<div>184K views, 1 year ago</div>
</div>


</div>



</div>


</div>



<div>


<div>
<div><img class="cimgbrd" src="/photos/channels4_profile.jpg"/></div>	


<div class="cqweppnd">

<div class="left"><img class="cimgbrd_zz2" src="/pics/HvP81gXfstQ.jpg"/></div>

<div class="left ppc123zz">
<div><a href="">Alan Walker (Remix) - New </a></div>
<div>184K views, 1 year ago</div>
</div>


</div>



</div>


</div>









</div>





</div>	
	
	
		
		
		</div>
		
		
		
		</div>
		
		</div>
		
		
		<div className="kz2z_3">(C) Fantom 2023</div>	
	

  </>);
}


