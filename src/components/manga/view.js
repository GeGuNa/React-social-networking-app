import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './view.css'

export function ShowMng({name, img, chapter}) {
	return (<><div>
		<div className="mng_TTl"><Link to="/">{name}</Link></div>
		<div><img className="cz123_dmg" alt="Image for Manga_chz"  src={img}/></div>
		<div className="psftrrcmdn">
			<div className="crcmndftrttl"><Link to="/">{chapter}</Link></div>
		</div>
</div>	
</>)
}


export function ShowTpMng({name,img,status}) {
	return (<>
<div>

<div><img className="brdr21" alt="Image for Manga_chz" src={img} width="50" height="50"/>	</div>
	
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
	
	

<div className="Manga_Cat">
	
	<div className="c20">
		<img src="/pics/01365-shadow-slave.jpg" className="mng_TTl_img"/>
	</div>	
	

	
	<div className="c80">
	
	<div>
	
	<div className="MngTTlq22"><b>Shadow Slave</b> | Release date: <strong><Link to="/">2020</Link></strong></div>

	
	
		In spite of the fact that he has lost his correct arm and right leg because of an auto collision, Bei Ming presently can't seem to lose his convictions towards life. After he experienced a criminal out and about and faced them for affection, Bei Ming endured a genuine physical issue. At the point when he woke up in the emergency clinic, he out of nowhere saw a brutal pooch that likes to act cool constantly, close to him. Bei Ming can stand up, yet additionally possessees solid forces. As Bei Ming is by and large all forceful and glad for himself, much to his dismay… a tremendous emergency is gradually coming his direction.		In spite of the fact that he has lost his correct arm and right leg because of an auto collision, Bei Ming presently can't seem to lose his convictions towards life. After he experienced a criminal out and about and faced them for affection, Bei Ming endured a genuine physical issue. At the point when he woke up in the emergency clinic, he out of nowhere saw a brutal pooch that likes to act cool constantly, close to him. Bei Ming can stand up, yet additionally possessees solid forces. As Bei Ming is by and large all forceful and glad for himself, much to his dismay… a tremendous emergency is gradually coming his direction.
	</div>	
	
	
			<div className="Mng_Brdqwe2"> </div>
		
		
			<div className="Manga_TPMG">
			
			<span>Author</span>: <Link to="/">Emperor</Link>
			<br/><span>Chapters</span>: <Link to="/">15125</Link>
			</div>	
	

		
			<div className="Manga_TPMG">
			
			<Link to="/" className="Manga_Cat_Lnk_Bq">Fantasy</Link> <Link to="/" className="Manga_Cat_Lnk_Bq">Drama</Link>  <Link to="/" className="Manga_Cat_Lnk_Bq">Martial arts</Link>  <Link to="/" className="Manga_Cat_Lnk_Bq">ADVENTURE</Link> <Link to="/" className="Manga_Cat_Lnk_Bq">ROMANCE</Link>
			
			</div>	
		
		<div className="mngBKmrkandRd">
		
		<Link to="/" className="Manga_Cat_Lnk_Bq2">Read from the starting point</Link>   <Link to="/" className="Manga_Cat_Lnk_Bq2">Bookmark</Link>
		
		</div>
		
	
	
	
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


<div><Link to="/">Bookmarked</Link></div>
<div><Link to="/">History</Link></div>
<div><Link to="/">Genre</Link></div>
<div><Link to="/">Most populars</Link></div>


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
<Link to="/" className="seeingall">See all</Link>
</div>


</div>



</div>
	
	
	




</Main>	
	
	
	</>)
}


