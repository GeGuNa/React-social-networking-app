import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'



function Profile() {
	

 const params = useParams();
  
if (isNaN(params.id)) {

return (<Navigate to="/" replace={true} />)
  
} else {
	return (<Profile_view id={Math.abs(params.id)}/>);
}
  
}


export function Profile_view({id}) {

return (
   <div className="App">
    {id} <br/>
    </div>
  );
  
}



export default Profile;
