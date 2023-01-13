import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Main } from './funcs.js'


export function Showblogs(props) {
	return (<> 
	
	

		<div>
			<div><img src={props.img} className="MBlog_img"/></div>
		
			<div className="MBlog_pd">	
				<div><a href="">{props.name}</a></div>
				<div className="MblogDetails"><span>{props.time}</span> <span className="MblogDetailsPoint"></span> <span>{props.comments}</span></div>
				<div>{props.desc}</div>
			</div>
		</div>
	
	
	
	</>)
}


export function Showrigtblogs(props) {
	return (<>
	


<div>

<div><img src={props.img} width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><a href="">{props.name}</a></div>	
	<div><a className="MblogDetails" href="">{props.author}</a>
	
	{props.time && <>
	<span className="MblogDetailsPoint"></span> <span className="MblogDetails">{props.time}</span>
</>}
	
	</div>	
	

	
	
</div>	

</div>

	
</>)
}








export default function Bloglst() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">



<div className="col-12 mcqwzfrd">
	
	

<div className="cz_mn_2_1">
	<div className="left"><h3>User blogs</h3></div>
	<div className="right"><a href="">Detailed search</a></div>
</div>



<div className="cz213_srch">
	
<div className="cz1"> 	
<input type="text" className="wi_100" placeholder="Searching by name"/> 
</div>

<div className="cz2"> 	
<button className="czsrchz__2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button>
</div>


</div>



<div className="MBlog">
	
	

	
	<Showblogs img={'/blogs/blog-post-thumb-1.jpg'} name={'Top 3 JavaScript Frameworks'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	
	
	
	
	
	<Showblogs img={'/blogs/blog-post-thumb-2.jpg'} name={'About Remote Working'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	
		<Showblogs img={'/blogs/blog-post-thumb-3.jpg'} name={'A Guide to Becoming a Full-Stack Developer'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	
	

		<Showblogs img={'/blogs/blog-post-thumb-4.jpg'} name={'High Performance JavaScript'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	

		<Showblogs img={'/blogs/blog-post-thumb-5.jpg'} name={'Learn React in 24 Hours'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	

		<Showblogs img={'/blogs/blog-post-thumb-6.jpg'} name={'Learn React in 24 Hours'} time={'Published 2 months'} comments={'23 comment'} desc={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...'}/>
	
	
	
	
	
	


	
<div>
		
<div className="BlogNextPage"><a href="">Next page  <svg className="right" width="24"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-long" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z"></path></svg></a> </div>


	



</div>



	

</div>





</div>



</div>

	

<div className="col-3">


<div className="rprflmn">


<div><a href="">Saved</a></div>
<div><a href="">History</a></div>
<div><a href="">Categories</a></div>
<div><a href="">Most popular</a></div>
<div><a href="">My blog</a></div>

</div>



<div className="ndsg4">

<div className="t21">New blogs</div>


<div className="mayk">



<Showrigtblogs name={'C++ pointers'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Objects'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Classes'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Memory allocations'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ templates'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>

<Showrigtblogs time={'An hour ago'} name={'C++ Good sides'} author={'Nukri'} img={'/manga/175x245 (3).jpeg'}/>







</div>


<div className="rnmg31">
<a href="#" className="seeingall">See all</a>
</div>


</div>



</div>
	
	
	
	
	


</Main>	
	
	
	</>)
}


