import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './Author.css'

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




export default function Byauthor() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">


<div className="czrMngAUt">
	
	
	<div className="CzMNGqweTiTLe">Mangas Made up also By - <b>Tan siao jian</b></div>
	


<div className="EnTire_TT">


<div className="HeadOFByAuth"><Link to="/">Battle Through the Heavens (Completed)</Link>

<div className="cqepzrrl"><div className="prsqrrgh">1</div></div>




</div>

<div className="czFLDDMNG">


	
<div>
	<img className="CZMManga_Related_by_AUth" src="/manga/wu-dong-qian-kun.jpg" alt="Battle thru"/>
</div>


	
<div className="ByTbl"> 
	<div>Author: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>	
	<div>Artist: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>
	<div>Status: <b><Link to="/" className="clr2_pqzz">Ongoing </Link></b></div>
	<div>Type: <b><Link to="/" className="clr2_pqzz">WEb novel</Link></b></div>
	<div>Genre: <b>Tian Can Tu Dou</b></div>
	
</div>
	





</div>


</div>














<div className="EnTire_TT">


<div className="HeadOFByAuth"><Link to="/">Battle Through the Heavens (Completed)</Link>

<div className="cqepzrrl"><div className="prsqrrgh">22</div></div>

</div>

<div className="czFLDDMNG">


	
<div>
	<img className="CZMManga_Related_by_AUth" src="/manga/wu-dong-qian-kun.jpg" alt="Battle thru"/>
</div>


	
<div className="ByTbl"> 
	<div>Author: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>	
	<div>Artist: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>
	<div>Status: <b><Link to="/" className="clr2_pqzz">Ongoing </Link></b></div>
	<div>Type: <b><Link to="/" className="clr2_pqzz">WEb novel</Link></b></div>
	<div>Genre: <b>Tian Can Tu Dou</b></div>
	
</div>
	





</div>


</div>



<div className="EnTire_TT">


<div className="HeadOFByAuth"><Link to="/">Battle Through the Heavens (Completed)</Link></div>

<div className="czFLDDMNG">


	
<div>
	<img className="CZMManga_Related_by_AUth" src="/manga/wu-dong-qian-kun.jpg" alt="Battle thru"/>
</div>


	
<div className="ByTbl"> 
	<div>Author: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>	
	<div>Artist: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>
	<div>Status: <b><Link to="/" className="clr2_pqzz">Ongoing </Link></b></div>
	<div>Type: <b><Link to="/" className="clr2_pqzz">WEb novel</Link></b></div>
	<div>Genre: <b>Tian Can Tu Dou</b></div>
	
</div>
	





</div>


</div>



<div className="EnTire_TT">


<div className="HeadOFByAuth"><Link to="/">Battle Through the Heavens (Completed)</Link></div>

<div className="czFLDDMNG">


	
<div>
	<img className="CZMManga_Related_by_AUth" src="/manga/wu-dong-qian-kun.jpg" alt="Battle thru"/>
</div>


	
<div className="ByTbl"> 
	<div>Author: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>	
	<div>Artist: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>
	<div>Status: <b><Link to="/" className="clr2_pqzz">Ongoing </Link></b></div>
	<div>Type: <b><Link to="/" className="clr2_pqzz">WEb novel</Link></b></div>
	<div>Genre: <b>Tian Can Tu Dou</b></div>
	
</div>
	





</div>


</div>


<div className="EnTire_TT">


<div className="HeadOFByAuth"><Link to="/">Battle Through the Heavens (Completed)</Link></div>

<div className="czFLDDMNG">


	
<div>
	<img className="CZMManga_Related_by_AUth" src="/manga/wu-dong-qian-kun.jpg" alt="Battle thru"/>
</div>


	
<div className="ByTbl"> 
	<div>Author: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>	
	<div>Artist: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>
	<div>Status: <b><Link to="/" className="clr2_pqzz">Ongoing </Link></b></div>
	<div>Type: <b><Link to="/" className="clr2_pqzz">WEb novel</Link></b></div>
	<div>Genre: <b>Tian Can Tu Dou</b></div>
	
</div>
	





</div>


</div>



<div className="EnTire_TT">


<div className="HeadOFByAuth"><Link to="/">Battle Through the Heavens (Completed)</Link></div>

<div className="czFLDDMNG">


	
<div>
	<img className="CZMManga_Related_by_AUth" src="/manga/wu-dong-qian-kun.jpg" alt="Battle thru"/>
</div>


	
<div className="ByTbl"> 
	<div>Author: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>	
	<div>Artist: <b><Link to="/" className="clr2_pqzz">Tian Can Tu Dou </Link></b></div>
	<div>Status: <b><Link to="/" className="clr2_pqzz">Ongoing </Link></b></div>
	<div>Type: <b><Link to="/" className="clr2_pqzz">WEb novel</Link></b></div>
	<div>Genre: <b>Tian Can Tu Dou</b></div>
	
</div>
	





</div>


</div>



	
	
	
	
	
	
	
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

<div className="t21">Top 10 viewed </div>


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


