import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './manga.css'


export function Showmanga(props) {
	return (<> 
	
	
<div><img  alt={props.alt} src={props.pic}/></div>	
	
	
	</>)
}





export function Showrndmmng(props) {
	return (<>
	


<div>

<div><img src={props.img} width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><Link to="/">{props.name}</Link></div>	
	<div><Link className="MblogDetails" to="/">{props.author}</Link>
	
	{props.time && <>
	<span className="MblogDetailsPoint"></span> <span className="MblogDetails">{props.time}</span>
</>}
	
	</div>	
	

	
	
</div>	

</div>

	
</>)
}








export default function Mangapstread() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">







<div className="col-12">
	
		
<div className="col-12 mcqwzfrd">
	
	

<div className="cz_mn_2_1">
<h1 className="mb-3 cPostName">Shen Yin Wang Zuo / Sealed Throne -  Chapter 130</h1>
</div>


<div className="czHdMng">


<Link to="/" className="Cbn123_zz11">Prev</Link> 	
<label className="Czmng_2">
<select name="sel" className="slct_of_manga">
{[...Array(244).fill()].map((i,z)=>
	<option value={z+1}>Chapter {z+1}</option>
)}


</select>
</label>
<Link to="/" className="Cbn123_zz11">Next</Link>



</div>


</div>

		
		
		
	

<div className="czListOFmng">
	

	
	
	
	
<Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_1.jpg"/>
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_2.jpg"/>	
<Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_3.jpg"/>	
<Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_4.jpg"/>	
<Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_5.jpg"/>	
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_6.jpg"/>
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_7.jpg"/>	
<Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_8.jpg"/>	
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_9.jpg"/>
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_10.jpg"/>	
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_11.jpg"/>	
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_12.jpg"/>	
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_13.jpg"/>	
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_14.jpg"/>	
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_15.jpg"/>	
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_16.jpg"/>	
<Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_17.jpg"/>	
  <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_18.jpg"/>	
  <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_19.jpg"/>	
 <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_20.jpg"/>	
  <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_21.jpg"/>
  <Showmanga  alt="Shen Yin Wang Zuo 130" pic="/Shen Yin Wang Zuo/chap_132_22.jpg"/>	



</div>









</div>



</div>

	

<div className="col-3">


<div className="rprflmn">


<div><Link to="/">Saved</Link></div>
<div><Link to="/">History</Link></div>
<div><Link to="/">Categories</Link></div>
<div><Link to="/">Most popular</Link></div>
<div><Link to="/">My blog</Link></div>

</div>



<div className="ndsg4">

<div className="t21">Related manga</div>


<div className="mayk">



<Showrndmmng time={'An hour ago'}  name={'Sealed throne 1'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 2'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 1'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 3'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 4'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 7'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 7'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 7'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 7'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 7'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 7'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>
<Showrndmmng time={'An hour ago'} name={'Sealed throne 7'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>






</div>


<div className="rnmg31">
<Link to="/" className="seeingall">See all</Link>
</div>


</div>



</div>
	
	
	
	
	


</Main>	
	
	
	</>)
}


