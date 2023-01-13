import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom'
import Home from './page/home.js';
import Login from './page/login.js';
import Signup from './page/signup.js';
import Manga from './page/manga.js';
import Profile from './page/profile.js';
import Messaging from './page/messaging.js';
import Video from './page/videos.js';
import Friends from './page/friends.js';
import Notification from './page/notifications.js';
import Mangalist from './page/mangalist.js';
import Mangaview from './page/mangaview.js';
import Videoview from './page/videoview.js';
import Bloglst from './page/blogs.js';


import Communities, { Community } from './page/communities.js';


export function Errordetection() {
	return (<Navigate to="/" replace={true} />)
}


export function Aba(){
 
  const params = useParams();
  

	return (<>
	{params.id}
	</>)
	

}


export default function App() {
  return (
  <Routes>
	<Route path="/" element={<Home/>} />
	<Route path="/login" element={<Login/>} />
	<Route path="/community/:id" element={<Community/>} />
	<Route path="/communities" element={<Communities/>} />
	<Route path="/friends" element={<Friends/>} />
	<Route path="/Notifications" element={<Notification/>} />
	<Route path="/Blogs" element={<Bloglst/>} />
	<Route path="/Mangalist" element={<Mangalist/>} />
	<Route path="/Mangaview/:id" element={<Mangaview/>} />
	<Route path="/video/:id" element={<Videoview/>} />
				
	
	
	
	<Route path="/signup" element={<Signup/>} />
	<Route path="/manga/:id" element={<Manga />} />	
    <Route path="/profile/:id" element={<Profile />} />	
    <Route path="/Videos" element={<Video />} />	
    <Route path="/Messaging/:id" element={<Messaging />} />	
	<Route path="/aba/:id" 
	 /* loader={() => {  {console.log('15')}  }}
	  action={() => {  {console.log('15')} }}*/
	  element={<Aba/>}
	/>	
	<Route path="/*" element={<Errordetection/>} />
  </Routes>
  );
}

