import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MainForAuthorized } from '../../page/funcs.js'
import './chat.css'



	
	
export function Chatid() {
	
const qq = useParams()
	
	
	return (<>
	
	kek  {qq.id}
	
	
	</>)	
	
}

export function Chats() {
	
let QChatRoomData = [
	{pic: '/pics/chat/boys.png',name:'For boys',url:'/',visitors:'/'},
	{pic: '/pics/chat/girls.png',name:'For girls',url:'/',visitors:'/'},
	{pic: '/pics/chat/Rainbow.png',name:'Rainbow',url:'/',visitors:'/'},
	{pic: '/pics/chat/Black.png',name:'Black hole',url:'/',visitors:'/'},
	{pic: '/pics/chat/Love.png',name:'Love',url:'/',visitors:'/'},
	{pic: '/pics/chat/Party.png',name:'Party day',url:'/',visitors:'/'},
	{pic: '/pics/chat/keke.png',name:'Women things',url:'/',visitors:'/'},
	{pic: '/pics/chat/indigo.png',name:'Indigo',url:'/',visitors:'/'},
	{pic: '/pics/chat/meal.png',name:'Kitchen & meal',url:'/',visitors:'/'},
	{pic: '/pics/chat/boys.png',name:'Love',url:'/',visitors:'/'},
	{pic: '/pics/chat/boys.png',name:'Love',url:'/',visitors:'/'},
	{pic: '/pics/chat/boys.png',name:'Love',url:'/',visitors:'/'}
];


	
return (<>
	
	

<MainForAuthorized>


<div className="col-9 cmnt2z1qwer">


	<div className="kAppPagePhtChatHeading">
			<div className="klmanchlq1illumniation"></div>
			<div className="knmaninhedq123q">Chat rooms</div>
			<div className="lmkmnaingq331">Chit-chatting with the people!</div>
	</div>





	<div className="topic_match_for_you_cats chMarginTopBt1a">
			<Link to="/">Chat activity</Link>
	</div>




<div className="gqchat_3">


<div className="gqchat2">



	{QChatRoomData.map((chatRoom, index) => ( 
		
	<div className="gqChat1" key={index}>

		<div className="gqca51231">
			
				<div className="pchat1_m">
						
						<div>
							<img  alt="xz" className="kPhx80x80" src="/pics/chat/Black.jpeg" />
						</div>
				 

						<div className="pFlexAlCenter">
							
							
							<div className="kchTDName1F2za">
								<Link className="kchTDName1F" to="/">Black hole </Link>
							</div>
							
							<div className="mdtxtWhza1">Room is empty</div>
							
							
						</div>


				</div>
		</div>


	</div>	
		
	))}



</div>
</div>










</div>























	<div className="col-3">


		<div className="rprflmn">

			<div><a href="/">News</a></div>
			<div><a href="/">Reactions</a></div>
			<div><a href="/">Search</a></div>
			<div><a href="/">Updates</a></div>
			<div><a href="/">Comments</a></div>
			<div><a href="/">Videos</a></div>
			<div><a href="/">Photos</a></div>
			<div><a href="/">Recommended</a></div>
			<div><a href="/">Settings</a></div>
			<div><a href="/">My page</a></div>
			<div><a href="/">Pages</a></div>

		</div>

	</div>


</MainForAuthorized>

	
	
	
	
	
	</>)

}
