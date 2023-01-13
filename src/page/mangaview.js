import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from './funcs.js'


export function ShowMng({name, img, chapter}) {
	return (<><div>
		<div className="mng_TTl"><a href="">{name}</a></div>
		<div><img className="cz123_dmg" src={img}/></div>
		<div className="psftrrcmdn">
			<div className="crcmndftrttl"><a href="">{chapter}</a></div>
		</div>
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




export default function Mangaview() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">


<div className="col-12 mcqwzfrd">
	
	

<div className="CData_2">
	
	<div className="left CData_20">
		<img src="/manga/175x245.jpeg" className="mng_TTl_img"/>
	</div>	
	

	
	<div className="left CData_80">
		In spite of the fact that he has lost his correct arm and right leg because of an auto collision, Bei Ming presently can't seem to lose his convictions towards life. After he experienced a criminal out and about and faced them for affection, Bei Ming endured a genuine physical issue. At the point when he woke up in the emergency clinic, he out of nowhere saw a brutal pooch that likes to act cool constantly, close to him. Bei Ming can stand up, yet additionally possessees solid forces. As Bei Ming is by and large all forceful and glad for himself, much to his dismay… a tremendous emergency is gradually coming his direction.		In spite of the fact that he has lost his correct arm and right leg because of an auto collision, Bei Ming presently can't seem to lose his convictions towards life. After he experienced a criminal out and about and faced them for affection, Bei Ming endured a genuine physical issue. At the point when he woke up in the emergency clinic, he out of nowhere saw a brutal pooch that likes to act cool constantly, close to him. Bei Ming can stand up, yet additionally possessees solid forces. As Bei Ming is by and large all forceful and glad for himself, much to his dismay… a tremendous emergency is gradually coming his direction.
	</div>	

</div>

	

	<div className="mngqwez">Release date: <strong><a href="">2020</a></strong></div>


	<div className="CData_z2">
	
	
	
	<div>
		<div className=" CData_z2Pdng_book Round30"><a href="">Read now</a></div>
	</div>

	<div>
		<div className=" CData_z2Pdng_read Round30"><a href="">Bookmark</a></div>
	</div>
	
	</div>

	</div>



<div className="t21_cmrdcqwe">Recommended </div>		
	
	
	

<div className="Recmnd">



<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />
<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />
<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />
<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />
<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />
<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />
<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />
<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />
<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />
<ShowMng name={'Regressor Manual'} img={'/manga/175x245 (3).jpeg'} chapter={'Chapter 35'} />

	






		
		
</div>


	
	
	
		
	
	
	




</div>




	

<div className="col-3">


<div className="rprflmn">


<div><a href="">Bookmarked</a></div>
<div><a href="">History</a></div>
<div><a href="">Genre</a></div>
<div><a href="">Most populars</a></div>


</div>



<div className="ndsg4">

<div className="t21">Top 10 </div>


<div className="mayk">





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


<div className="rnmg31">
<a href="#" className="seeingall">See all</a>
</div>


</div>



</div>
	
	
	




</Main>	
	
	
	</>)
}


