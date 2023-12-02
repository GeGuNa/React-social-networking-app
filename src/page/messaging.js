import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export function Shdt({pic,name,status}) {
	return (<>
	
	<div>
	
<div className="left"><img className="phtsz" src={pic} /></div>

<div className="c1 left row">
<div>{name}</div>
<div>{status}</div>
</div>


</div>

	
	
	</>);
}




export default function Messaging() {
	return (<>

<div className="cl5123">
	
	<div className="kz2z_1">Main</div>
	
	<div className="right">
			
			<div className="kz2z_2" id="S123">
				
	
				
			
			
			
			<div>	<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path></svg></div>	
		
				
				
			<div> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 10l5 5 5-5z"></path></svg>   <span>Mary koberidze</span></div>
			<div><img className="kz2z_4" src="/pics/MO_LxM2yi48.jpg" height="40" width="40"/></div>
			
			</div>
			
			
			
			

		</div>
	
	</div>
	
	<div className="col-12">
		
	<div className="row g-0">
		
		
	
	<div className="col-2 mnqwe22lzzz">
		   


<div><input type="text" className="mauto form-control my-3" placeholder="Search..."/></div>



<div className="cmsglst">



<Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
<Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
<Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
<Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
<Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>
<Shdt pic={'/photos/jJ7g1VXRvqw.jpg'} name={'Mariam koberidze'} status={'online'}/>




</div>





	
		</div>
		
		
		
		<div className="col-10">
			

		
	<div className="czmsgnavmd">
	
	<div>
		
	<div className="left"><img src="/photos/avatar3.png" className="phtsz"/></div>	
	
	
	<div className="pdgq2zfq131z left">
	
	<div><strong>Mariam koberidze</strong></div>
	<div className="pdgq2zfq131zopc">Typing...</div>	
	
	</div>	
			
		
		
	</div>
	
	
	<div>
	
	<div className="right">
	
	<button className="btn "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button>
	
	<button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></button>
	
	<button className="btn "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal feather-lg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
	
	</div>
	
	
	</div>
	
	</div>
	
	
	
		
		
		</div>
		
		
		
		</div>
		
		</div>
		
		
		<div className="kz2z_3">(C) Fantom 2023</div>	
	
	
	</>)
}
