import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Main } from './funcs.js'


export function Showcmnt(props) {
	return (<> 
	
	

<div>


<div className="left pdvdrhwrqw">
	<img className="vqec_vkdqwe" src={props.pic}/>		
</div>
	
<div className="left">
	<div><a href="" className="VidmayLnk">{props.name}</a> <span>{props.posted}</span></div>
	<div>{props.text}</div>
</div>
	

</div>
	
	
	
	</>)
}


export function Showvdmayknow({name, img, author,view, posted}) {
	return (<>
	

<div>


<div className="left">
	<img className="czddimg" src={img} width="100"/>	
</div>
	
<div className="left pdvdlft10">
	<div><a href="" className="VidmayLnk">{name}</a></div>
	<div><a href="" className="czvdpo">{author}</a></div>
	<div>{view}, {posted}</div>
</div>
	

</div>	
	
	
</>)
}




export default function Videoview() {
	
const params = useParams();
  
if (isNaN(params.id)) {

return (<Navigate to="/" replace={true} />)
  
} else {
	return (<Videoviewmain id={Math.abs(params.id)}/>);
}
  
}




export function Videoviewmain({id}) {
	return (<>
	
<Main>



<div className="col-8 cmnt2z1qwer">


<div class="col-12 mcqwzfrd">
	
	

<div class="VidDetails">

<iframe src="https://www.youtube.com/embed/5zrMVrYofnQ" style={{width:'100%',height:'450px'}}></iframe>

</div>


<div style={{marginBottom:'10px',paddingLeft:'10px'}}>
<strong >Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》 
</strong>
</div>


<div class="ViddDetail">
	
	<div class="ViddDetail20">
		
		<div class='pdvdlft10'><img src="/chat/channels4_profile.jpg"/></div>
		
		<div class='pdvdlft10'>
			<div><a href="">Videomaker</a></div>
			<div>2.49K subscribers</div> 
		</div>
		

	</div>	
	

<div class="ViddDetail10">
	
	
	<div><a class="subscr1" href="">Subscribe</a></div>
	</div>


	
	<div class="ViddDetail70" style={{justifyContent:'flex-end'}}>
	
	
		<div><a class="lkvd" href="">Like</a></div>
		<div><a class="unlkvd" href="">Unlike</a></div>
		<div><a class="shrvd" href="">Share</a></div>
		<div><a class="dwvd" href="">Download</a></div>
	
	
	
	</div>	

</div>




</div>



<div class="vidDsd123Decs">
Description:
<strong>
	Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》 Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》Southern Expedition and Northern War - NZBZ 《 Wu Geng Ji - Opening Song 》
</strong>
</div>






<div class="t21_cmrdcqwe">Comments </div>	





<div class="Recmnd">


<div class="vid_frm">

<div class="c1"><img class="vqec_vkdqwe2z" src="/pics/HvP81gXfstQ.jpg"/>	</div>
<div class="c2"><textarea placeholder="Enter text"></textarea></div>


</div>




<div class="VidCmnts">





<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>
<Showcmnt pic={'/pics/HvP81gXfstQ.jpg'} name={'Whocares'} text={'lorem ipsumdolor'} posted={'10 days ago'}/>





</div>




		
		
</div>







</div>

	

<div className="col-4">



<div class="VidmNQE">

<div class="t21">Videos you may like </div>


<div class="VidMayknow">



<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>


<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>

<Showvdmayknow name={'YYYYYYYYYY'} author={'Alan walker'} img={'/pics/HvP81gXfstQ.jpg'} view={'1k views'} posted={'2days ago'}/>







</div>


<div class="rnmg31">
<a href="#" class="seeingall">See all</a>
</div>


</div>







</div>
	
	
	


</Main>	
	
	
	</>)
}


