import Home from './page/home.js';
import Login from './page/login.js';
import Signup from './page/signup.js';


import { Routes, Route, Link } from 'react-router-dom'

export function Errordetection() {
	return (<div> UUps</div>)
}



function App() {
  return (
  <Routes>
	<Route path="/" element={<Home/>} />
	<Route path="/login" element={<Login/>} />
	<Route path="/signup" element={<Signup/>} />
	<Route path="/*" element={<Errordetection/>} />
  </Routes>
  );
}

export default App;
