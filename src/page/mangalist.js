import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from './funcs.js'


export function ShowMng({name,img,chapter}) {
	return (<>
	<div className="c12zz_flx_col">
		<div className="mng_TTl"><Link to="/">{name}</Link></div>
		<div><img src={img} className="mng_TTl_img"/></div>
		<div><Link to="/">{chapter}</Link></div>
	</div>
	</>)
}


export function ShowTpMng({name,img,status}) {
	return (<>
<div>

<div><img className="brdr21" src={img} width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><Link href="">{name}</Link></div>	
	<div><Link className="czOpc" href="">{status}</Link></div>	
</div>	

</div>
	</>)
}




export default function Mangalist() {
	return (<>
	
<Main>



<div class="col-9 cmnt2z1qwer">


<div class="col-12 mcqwzfrd">
	
	

<div class="cz_mn_2_1">
	<div class="left"><strong>TODAY'S MANGA</strong></div>
	<div class="right"><a href="">Detailed search</a></div>
</div>



<div class="cz213_srch">
	
<div class="cz1"> 	
<input type="text" class="wi_100" placeholder="Searching by name"/> 
</div>

<div class="cz2"> 	
<button class="czsrchz__2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button>
</div>


</div>



<div class="cz_mn_2_3">
	
	
	
	
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />
		<ShowMng name={'Regressor Manual'} img={'/manga/175x245.jpeg'} chapter={'Chapter 35'} />








</div>



	

</div>



	

</div>




	

<div class="col-3">


<div class="rprflmn">


<div><a href="">Bookmarked</a></div>
<div><a href="">History</a></div>
<div><a href="">Genre</a></div>
<div><a href="">Most populars</a></div>


</div>



<div class="ndsg4">

<div class="t21">Top 10 </div>


<div class="mayk">





<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Battle through the heavens'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Against the sky supreme'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Throne of Seal'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'One Step Toward Freedom'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Wan Jie Xian Zong '}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Boruto'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Battle through the heavens'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Battle through the heavens'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Battle through the heavens'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Battle through the heavens'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Battle through the heavens'}/>
<ShowTpMng img={'/manga/175x245 (3).jpeg'} status={'ongoing'} name={'Battle through the heavens'}/>





</div>


<div class="rnmg31">
<a href="#" class="seeingall">See all</a>
</div>


</div>



</div>
	
	
	




</Main>	
	
	
	</>)
}


