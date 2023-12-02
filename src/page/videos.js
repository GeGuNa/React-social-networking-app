import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main, Nav } from './funcs.js'



export function VidlsS({name, picvid, prflpic, view, date}){ 
	return (<>
	
<div>


<div>
<div><img className="cimgbrd" src={picvid} /></div>	


<div className="cqweppnd">

<div className="left"><img className="cimgbrd_zz2" src={prflpic}/></div>

<div className="left ppc123zz">
<div><a href="#">{name}</a></div>
<div>{view}, {date}</div>
</div>


</div>



</div>


</div>

	
	</>)
}


export default function Video() {
	
/*
const params = useParams();
  
if (isNaN(params.id)) {

return (<Navigate to="/" replace={true} />)
  
} else {
	return (<Video_main id={Math.abs(params.id)}/>);
}*/

return (<Video_main/>);
  
}


export function Video_main() {
	
  const params = useParams();
	
	
  return (<>
  
 
 <Nav/>
	
	<div className="col-12">
		
	<div className="row g-0">
		
		
	
	<div className="col-2 mnqwe22lzzz">
		   


<div className="mautoz_22">
	
<div className="left"><div className="cz_5zz_1"><svg className="lzzzf123a_22_vd2"></svg> Video</div></div>	
<div className="left"><div className="cz_5zz_1 cz_5zz_13z"><svg className="lzzzf123a_22_vd1"></svg> Live</div></div>			
</div>


<div className="cvdmn">

<div className="active">
<div className="left cslz123pdng"><svg className="lzzzf123a_22_vd3"></svg> </div>
<div className="left">Home</div>
</div>


<div>
<div className="left cslz123pdng"><svg className="lzzzf123a_22_vd3"></svg> </div>
<div className="left">Shorts</div>
</div>



<div>
<div className="left cslz123pdng"><svg className="lzzzf123a_22_vd3"></svg> </div>
<div className="left">Subscriptions</div>
</div>



<div>
<div className="left cslz123pdng"><svg className="lzzzf123a_22_vd3"></svg> </div>
<div className="left">Library</div>
</div>




<div>
<div className="left cslz123pdng"><svg className="lzzzf123a_22_vd3"></svg> </div>
<div className="left">History</div>
</div>




<div>
<div className="left cslz123pdng"><svg className="lzzzf123a_22_vd3"></svg> </div>
<div className="left">Your videos</div>
</div>

<div>
<div className="left cslz123pdng"><svg className="lzzzf123a_22_vd3"></svg> </div>
<div className="left">Liked videos</div>
</div>


<div>
<div className="left cslz123pdng"><svg className="lzzzf123a_22_vd3"></svg> </div>
<div className="left">Bookmarks</div>
</div>



</div>




	
		</div>
		
		
		
		<div className="col-10">
			

<div className="srchbr_3">
	
<div className="srch_br">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
</div>	
	
	
<input className="z2" type="text" placeholder="searching for the videos"/>
</div>
			





	
<div className="czd1231zz_da">
	
	
<div className="czd1231zz_d">
<div className="left"><a href="">All</a></div>
<div className="left"><a href="">Travel</a></div>
<div className="left"><a href="">Programming</a></div>
<div className="left"><a href="">Culture</a></div>
<div className="left"><a href="">Tv</a></div>
<div className="left"><a href="">Fashion</a></div>
<div className="left"><a href="">Music</a></div>
<div className="left"><a href="">Fitness</a></div>
<div className="left"><a href="">Hacking</a></div>
</div>


<div className="pvdlst">
	
	

		
	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	
	
	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	


	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	


	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	
	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	

	<VidlsS name={'Alan Walker (Remix) - New'} picvid={'/photos/channels4_profile.jpg'} prflpic={'/pics/HvP81gXfstQ.jpg'} view={'184K views'} date={'1 year ago'}/>	









</div>





</div>	
	
	
		
		
		</div>
		
		
		
		</div>
		
		</div>
		
		
		<div className="kz2z_3">(C) Fantom 2023</div>	
	

  </>);
}


