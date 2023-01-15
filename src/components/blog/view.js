import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Main } from '../../page/funcs.js'
import './view.css'

export function ShowCmnt(props) {
	return (<> 
	
	
<div className="czBlgPDNG">

<div><img alt="" src={props.pic} className="cPostDQWE_img"/></div>

<div>
	
<div><Link to="/">{props.author}</Link> <span className="MblogDetailsPoint"></span> <span className="MblogDetails">{props.when}</span></div>

<div>{props.text}</div>

<div id="pstQWEZ"><Link className="Psqwe_id_lk" href="">Reply</Link>    <Link to="/">Like</Link></div> 

</div>


</div>


	
	
	
	</>)
}


export function Showrigtblogs(props) {
	return (<>
	


<div>

<div><img alt="Img"  src={props.img} width="50" height="50"/>	</div>
	
<div className="maykchild"> 
	<div><Link to="/">{props.name}</Link></div>	
	<div><Link className="MblogDetails" href="">{props.author}</Link>
	
	{props.time && <>
	<span className="MblogDetailsPoint"></span> <span className="MblogDetails">{props.time}</span>
</>}
	
	</div>	
	

	
	
</div>	

</div>

	
</>)
}








export default function Blogview() {
	return (<>
	
<Main>



<div className="col-9 cmnt2z1qwer">



<div className="col-12 mcqwzfrd">
	
<div className="col-12 mcqwzfrd">
	
	

<div className="cz_mn_2_1">
<h1 className="mb-3 cPostName">A Loving Heart is the Truest Wisdom</h1>
</div>



<div className="MBlog">
	
	
<div className="cPostDesc1">

<div>In 2013, I applied for a travel visa to the United States. Along with the visa, America, with her boundless generosity, also granted me a new name.</div>

<div className="cqw_123zzzblg2"><img alt="Img"  src="/blogs/image_2.jpg.webp"/></div>
	
<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.

</div>	


<div className="cPostDQWE">

<div><img alt="Img"  src="/pics/282.jpg" className="cPostDQWE_img"/></div>

<div className="cPOQWez_L">
<div><Link to="/">George Washington</Link> <span className="MblogDetailsPoint"></span> <span className="MblogDetails">An hour ago</span></div>
<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</div>
</div>


</div>


		
</div>
	


	
<div>
		
<div className="BlogNextPage"><Link to="/">Next page  <svg className="right" width="24"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-long" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z"></path></svg></Link> </div>


	



</div>






	

</div>








</div>




</div>


<div className="BLog_Cmnt">

<div className="cqweBtmp"><span className="CmntPSQE">Comments: 1522</span></div>


<ShowCmnt pic={'/pics/282.jpg'} author={'George Washington'} when={'an hour ago'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!'}/>




<ShowCmnt pic={'/pics/282.jpg'} author={'George Washington'} when={'an hour ago'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!'}/>


<ShowCmnt pic={'/pics/282.jpg'} author={'George Washington'} when={'an hour ago'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!'}/>


<ShowCmnt pic={'/pics/282.jpg'} author={'George Washington'} when={'an hour ago'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!'}/>


<ShowCmnt pic={'/pics/282.jpg'} author={'George Washington'} when={'an hour ago'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!'}/>

<ShowCmnt pic={'/pics/282.jpg'} author={'George Washington'} when={'an hour ago'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!'}/>

<ShowCmnt pic={'/pics/282.jpg'} author={'George Washington'} when={'an hour ago'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!'}/>

<ShowCmnt pic={'/pics/282.jpg'} author={'George Washington'} when={'an hour ago'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!'}/>

<ShowCmnt pic={'/pics/282.jpg'} author={'George Washington'} when={'an hour ago'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!'}/>









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
<Link to="/" className="seeingall">See all</Link>
</div>


</div>






</div>
	
	
	
	
	


</Main>	
	
	
	</>)
}


