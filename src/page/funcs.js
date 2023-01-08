import { useLocation } from 'react-router-dom'


export const zz = (check,url) => {
	return check.test(url);
};


export function Main({children}) {


	return (<>
	
	
	<Nav/>
	
<div className="col-12 clr1z">


<div className="row g-0">


<Left_menu/>


<div className="col-10">



<div className="row">


<div class="col-12">


<div class="row">


<div class="col-12">




<div class="row" style={{marginLeft:'10px'}}>
	

{children}


	
	
</div>



</div>




<div class="col-12"></div>


<div class="col-12"></div>




</div>



</div>





</div>


</div>






</div>



</div>  
  
  
 <Footer/> 
	
	
	
	</>)
}




export function Nav() {

//const auth_Stat = true;
//console.log(zz(/^(\/community\/[0-9]+)$/g,'/community/15'));

const location = useLocation();

//check if page path is community
const qzz = zz(/^(\/community\/[0-9]+)$/g, location.pathname)


//console.log(qzz)



return (<>

{qzz == true ?  ( <div class="clnav">
<div class="c1">

<div class="clnaqz1_">
	
	
<div class="pdng21"><img src="/pics/icons8-home-94.png" width="40"/></div>

<div><input class="pdng213zz" placeholder="Searching for the things"/></div>



</div>


<div class="clnaqz2_ cmtkdqflx">


<div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zm0 15.92c-.02.03-.06.06-.08.08H3V5.08L3.08 5h17.83c.03.02.06.06.08.08v13.84zm-10-3.41L8.5 12.5 5 17h14l-4.5-6z"></path></svg></div>


<div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path></svg></div>

<div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg></div>

<div><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"></path></svg></div>

<div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56zm152 0a56 56 0 1156-56 56.06 56.06 0 01-56 56z"></path></svg></div>

</div>


<div class="clnaqz3_">

<div>
	<div class="cqmzfqwe2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="L4rKfs~Qrm~k0Pk8MRsoza" x1="32.012" x2="15.881" y1="32.012" y2="15.881" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset=".242" stop-color="#f2f2f2"></stop><stop offset="1" stop-color="#ccc"></stop></linearGradient><circle cx="24" cy="24" r="11.5" fill="url(#L4rKfs~Qrm~k0Pk8MRsoza)"></circle><linearGradient id="L4rKfs~Qrm~k0Pk8MRsozb" x1="17.45" x2="28.94" y1="17.45" y2="28.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset=".363" stop-color="#0e5fa4"></stop><stop offset=".78" stop-color="#135796"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><circle cx="24" cy="24" r="7" fill="url(#L4rKfs~Qrm~k0Pk8MRsozb)"></circle><linearGradient id="L4rKfs~Qrm~k0Pk8MRsozc" x1="5.326" x2="38.082" y1="5.344" y2="38.099" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#889097"></stop><stop offset=".331" stop-color="#848c94"></stop><stop offset=".669" stop-color="#78828b"></stop><stop offset="1" stop-color="#64717c"></stop></linearGradient><path fill="url(#L4rKfs~Qrm~k0Pk8MRsozc)" d="M43.407,19.243c-2.389-0.029-4.702-1.274-5.983-3.493c-1.233-2.136-1.208-4.649-0.162-6.693 c-2.125-1.887-4.642-3.339-7.43-4.188C28.577,6.756,26.435,8,24,8s-4.577-1.244-5.831-3.131c-2.788,0.849-5.305,2.301-7.43,4.188 c1.046,2.044,1.071,4.557-0.162,6.693c-1.281,2.219-3.594,3.464-5.983,3.493C4.22,20.77,4,22.358,4,24 c0,1.284,0.133,2.535,0.364,3.752c2.469-0.051,4.891,1.208,6.213,3.498c1.368,2.37,1.187,5.204-0.22,7.345 c2.082,1.947,4.573,3.456,7.34,4.375C18.827,40.624,21.221,39,24,39s5.173,1.624,6.303,3.971c2.767-0.919,5.258-2.428,7.34-4.375 c-1.407-2.141-1.588-4.975-0.22-7.345c1.322-2.29,3.743-3.549,6.213-3.498C43.867,26.535,44,25.284,44,24 C44,22.358,43.78,20.77,43.407,19.243z M24,34.5c-5.799,0-10.5-4.701-10.5-10.5c0-5.799,4.701-10.5,10.5-10.5S34.5,18.201,34.5,24 C34.5,29.799,29.799,34.5,24,34.5z"></path></svg></div>
</div>


<div>
	<div class="cqmzfqwe2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="B7tH1ezsFVrorVaJSUtbja" x1="23.542" x2="23.542" y1="5.842" y2="41.729" gradientTransform="translate(.435 .317)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#B7tH1ezsFVrorVaJSUtbja)" d="M40.004,41.969L8.031,42c-1.099,0.001-1.999-0.897-2-1.996L6,8.031 c-0.001-1.099,0.897-1.999,1.996-2L39.969,6c1.099-0.001,1.999,0.897,2,1.996L42,39.969C42.001,41.068,41.103,41.968,40.004,41.969z"></path><path d="M29.5,15c-2.413,0-4.455,1.451-5.5,2.364C22.955,16.451,20.913,15,18.5,15 c-3.584,0-6.5,2.916-6.5,6.5c0,5.476,7.578,11.243,10.835,13.468c0.354,0.242,0.76,0.363,1.166,0.363 c0.405,0,0.811-0.121,1.165-0.363C28.423,32.741,36,26.972,36,21.5C36,17.916,33.084,15,29.5,15z" opacity=".05"></path><path d="M29.5,15.5c-2.547,0-4.669,1.747-5.5,2.538c-0.831-0.791-2.953-2.538-5.5-2.538c-3.309,0-6,2.691-6,6 c0,5.384,8.127,11.354,10.618,13.056c0.268,0.183,0.576,0.274,0.883,0.274c0.307,0,0.615-0.092,0.883-0.274 C27.374,32.854,35.5,26.881,35.5,21.5C35.5,18.191,32.809,15.5,29.5,15.5z" opacity=".07"></path><path fill="#fff" d="M24,18.75c0,0,2.463-2.75,5.5-2.75s5.5,2.496,5.5,5.5c0,5.17-8.101,11.072-10.399,12.643 c-0.364,0.249-0.837,0.249-1.201,0C21.101,32.572,13,26.67,13,21.5c0-3.004,2.463-5.5,5.5-5.5S24,18.75,24,18.75z"></path></svg></div>
</div>




<div>
	<div class="cqmzfqwe2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="CC9oZZMzjsmibQMmvMyOwa" x1="24" x2="24" y1="17.053" y2="40.166" gradientUnits="userSpaceOnUse"><stop offset=".88" stop-color="#c71926"></stop><stop offset=".883" stop-color="#b51623"></stop><stop offset=".886" stop-color="#9c131f"></stop></linearGradient><path fill="url(#CC9oZZMzjsmibQMmvMyOwa)" d="M4,17h40v21c0,1.105-0.895,2-2,2H6c-1.105,0-2-0.895-2-2V17z"></path><path fill="#eb6773" d="M44,17v-3.172c0-0.53-0.211-1.039-0.586-1.414l-1.828-1.828C41.211,10.211,40.702,10,40.172,10H7.828 c-0.53,0-1.039,0.211-1.414,0.586l-1.828,1.828C4.211,12.789,4,13.298,4,13.828V17H44z"></path><linearGradient id="CC9oZZMzjsmibQMmvMyOwb" x1="16" x2="32" y1="8.5" y2="8.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e"></stop><stop offset="1" stop-color="#545454"></stop></linearGradient><path fill="url(#CC9oZZMzjsmibQMmvMyOwb)" d="M30.5,7h-13C16.672,7,16,7.672,16,8.5V10h16V8.5C32,7.672,31.328,7,30.5,7z"></path><path d="M37,21.909h-2c-1.054,0-1.909-0.855-1.909-1.909v-4c0-1.054,0.855-1.909,1.909-1.909h2 c1.054,0,1.909,0.855,1.909,1.909v4C38.909,21.054,38.054,21.909,37,21.909z" opacity=".018"></path><path d="M37,21.818h-2c-1.004,0-1.818-0.814-1.818-1.818v-4c0-1.004,0.814-1.818,1.818-1.818h2 c1.004,0,1.818,0.814,1.818,1.818v4C38.818,21.004,38.004,21.818,37,21.818z" opacity=".036"></path><path d="M37,21.727h-2c-0.954,0-1.727-0.773-1.727-1.727v-4c0-0.954,0.773-1.727,1.727-1.727h2 c0.954,0,1.727,0.773,1.727,1.727v4C38.727,20.954,37.954,21.727,37,21.727z" opacity=".054"></path><path d="M37,21.636h-2c-0.904,0-1.636-0.733-1.636-1.636v-4c0-0.904,0.733-1.636,1.636-1.636h2 c0.904,0,1.636,0.733,1.636,1.636v4C38.636,20.904,37.904,21.636,37,21.636z" opacity=".073"></path><path d="M37,21.545h-2c-0.854,0-1.545-0.692-1.545-1.545v-4c0-0.854,0.692-1.545,1.545-1.545h2 c0.854,0,1.545,0.692,1.545,1.545v4C38.545,20.854,37.854,21.545,37,21.545z" opacity=".091"></path><path d="M37,21.455h-2c-0.803,0-1.455-0.651-1.455-1.455v-4c0-0.803,0.651-1.455,1.455-1.455h2 c0.803,0,1.455,0.651,1.455,1.455v4C38.455,20.803,37.803,21.455,37,21.455z" opacity=".109"></path><path d="M37,21.364h-2c-0.753,0-1.364-0.611-1.364-1.364v-4c0-0.753,0.611-1.364,1.364-1.364h2 c0.753,0,1.364,0.611,1.364,1.364v4C38.364,20.753,37.753,21.364,37,21.364z" opacity=".127"></path><path d="M37,21.273h-2c-0.703,0-1.273-0.57-1.273-1.273v-4c0-0.703,0.57-1.273,1.273-1.273h2 c0.703,0,1.273,0.57,1.273,1.273v4C38.273,20.703,37.703,21.273,37,21.273z" opacity=".145"></path><path d="M37,21.182h-2c-0.653,0-1.182-0.529-1.182-1.182v-4c0-0.653,0.529-1.182,1.182-1.182h2 c0.653,0,1.182,0.529,1.182,1.182v4C38.182,20.653,37.653,21.182,37,21.182z" opacity=".164"></path><path d="M37,21.091h-2c-0.602,0-1.091-0.488-1.091-1.091v-4c0-0.602,0.488-1.091,1.091-1.091h2 c0.602,0,1.091,0.488,1.091,1.091v4C38.091,20.602,37.602,21.091,37,21.091z" opacity=".182"></path><path d="M37,21h-2c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v4 C38,20.552,37.552,21,37,21z" opacity=".2"></path><g><path d="M13,21.909h-2c-1.054,0-1.909-0.855-1.909-1.909v-4c0-1.054,0.855-1.909,1.909-1.909h2 c1.054,0,1.909,0.855,1.909,1.909v4C14.909,21.054,14.054,21.909,13,21.909z" opacity=".018"></path><path d="M13,21.818h-2c-1.004,0-1.818-0.814-1.818-1.818v-4c0-1.004,0.814-1.818,1.818-1.818h2 c1.004,0,1.818,0.814,1.818,1.818v4C14.818,21.004,14.004,21.818,13,21.818z" opacity=".036"></path><path d="M13,21.727h-2c-0.954,0-1.727-0.773-1.727-1.727v-4c0-0.954,0.773-1.727,1.727-1.727h2 c0.954,0,1.727,0.773,1.727,1.727v4C14.727,20.954,13.954,21.727,13,21.727z" opacity=".054"></path><path d="M13,21.636h-2c-0.904,0-1.636-0.733-1.636-1.636v-4c0-0.904,0.733-1.636,1.636-1.636h2 c0.904,0,1.636,0.733,1.636,1.636v4C14.636,20.904,13.904,21.636,13,21.636z" opacity=".073"></path><path d="M13,21.545h-2c-0.854,0-1.545-0.692-1.545-1.545v-4c0-0.854,0.692-1.545,1.545-1.545h2 c0.854,0,1.545,0.692,1.545,1.545v4C14.545,20.854,13.854,21.545,13,21.545z" opacity=".091"></path><path d="M13,21.455h-2c-0.803,0-1.455-0.651-1.455-1.455v-4c0-0.803,0.651-1.455,1.455-1.455h2 c0.803,0,1.455,0.651,1.455,1.455v4C14.455,20.803,13.803,21.455,13,21.455z" opacity=".109"></path><path d="M13,21.364h-2c-0.753,0-1.364-0.611-1.364-1.364v-4c0-0.753,0.611-1.364,1.364-1.364h2 c0.753,0,1.364,0.611,1.364,1.364v4C14.364,20.753,13.753,21.364,13,21.364z" opacity=".127"></path><path d="M13,21.273h-2c-0.703,0-1.273-0.57-1.273-1.273v-4c0-0.703,0.57-1.273,1.273-1.273h2 c0.703,0,1.273,0.57,1.273,1.273v4C14.273,20.703,13.703,21.273,13,21.273z" opacity=".145"></path><path d="M13,21.182h-2c-0.653,0-1.182-0.529-1.182-1.182v-4c0-0.653,0.529-1.182,1.182-1.182h2 c0.653,0,1.182,0.529,1.182,1.182v4C14.182,20.653,13.653,21.182,13,21.182z" opacity=".164"></path><path d="M13,21.091h-2c-0.602,0-1.091-0.488-1.091-1.091v-4c0-0.602,0.488-1.091,1.091-1.091h2 c0.602,0,1.091,0.488,1.091,1.091v4C14.091,20.602,13.602,21.091,13,21.091z" opacity=".182"></path><path d="M13,21h-2c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1v4 C14,20.552,13.552,21,13,21z" opacity=".2"></path></g><path fill="#fff" d="M35,15h2c0.552,0,1,0.448,1,1v4c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-4 C34,15.448,34.448,15,35,15z"></path><path fill="#fff" d="M11,15h2c0.552,0,1,0.448,1,1v4c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-4 C10,15.448,10.448,15,11,15z"></path></svg></div>
</div>

</div>


</div>
</div>   ) : (  <div class="cl5123">
	
	<div class="mzn2">Main</div>
	
	<div class="pleft">
			
			<div class="inflx" id="S123">
				
	
				
			
			
			
			<div>	<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path></svg></div>	
		
				
				
			<div> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 10l5 5 5-5z"></path></svg>   <span>Mary koberidze</span></div>
			<div><img class="brdr21" src="/pics/MO_LxM2yi48.jpg" height="40" width="40"/></div>
			
			</div>
			
			
			
			

		</div>
	
	</div>)}






</>)	
	
}




export function Left_menu() {

return (<>


<div class="col-2 lftmn123123z" >
		   
		
		<div class="Lmenu_2">
		
		
		
		<div class="lmenuTitle cdatap2_3">Site menu</div>
		
		
		
		<div class="lmenusub">
			
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>  Dashboard</div>
		
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg> Propoerties</div>
		<div >Leads</div>
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"></path><path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"></path></svg> Calendar</div>
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z"></path></svg> Settings</div>
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg> Logout</div>
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"></path></svg> Chat</div>
		<div >Forum</div>
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg> Communities</div>
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z"></path></g></svg> Pages</div>
		
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"></path></svg> Customers</div>
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z"></path></g></svg> Fun page</div>
		<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg> Maintenance</div>
		
				<div ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"></path></svg> Help</div>
		
		
		
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
				
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
				
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
				
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
				
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>
		<div >wwwwwwwww</div>		
		</div>
		
		
		
		
		
		</div>
		
		
		</div>
		




</>)


}



export function Footer() {

return (<>
<div className="snacks123">
(C) Phantom in {(new Date().getFullYear())}
</div>

</>)

}




