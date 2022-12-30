import Home from './page/home.js';
import Login from './page/login.js';
import Signup from './page/signup.js';
import Manga from './page/manga.js';




import { Routes, Route, Link, useParams, redirect } from 'react-router-dom'

export function Errordetection() {
	return (<div> UUps</div>)
}


export function Aba(){
 
  const params = useParams();
  

	return (<>
	{params.id}
	</>)
	

}


function App() {
  return (
  <Routes>
	<Route path="/" element={<Home/>} />
	<Route path="/login" element={<Login/>} />
	<Route path="/signup" element={<Signup/>} />
	<Route path="/manga/:id" element={<Manga />} />	

<Route path="/aba/:id" 
 /* loader={() => {  {console.log('15')}  }}
  action={() => {  {console.log('15')} }}*/
  element={<Aba/>}
/>	
	
	<Route path="/*" element={<Errordetection/>} />
  </Routes>
  );
}

export default App;
