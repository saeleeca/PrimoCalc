import primo from '../Item_Primogem.webp'
// import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';
// import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';




const Home = () => {
	let navigate = useNavigate();
	const count = useRef(0);
	
	
	

	const { loginWithPopup, 
        loginWithRedirect, 
        logout, 
        user, 
        isAuthenticated,
        getAccessTokenSilently
       } = useAuth0();

	   React.useEffect(() => {
		async function checkUser() {
		  if (isAuthenticated && count.current === 0) {
			console.log('count: ', count);
			navigate('/Calculator');
			count.current = count.current + 1;
			console.log('count: ', count);
		  }
		}
	
		checkUser();                            // called async checkUser()
	  }, [isAuthenticated, loginWithRedirect]); // added loginWithRedirect

function callApi() {
axios
.get("http://localhost:4000/")
.then(navigate('/Calculator'))
.then(response => console.log(response.data))
.catch(error => console.log(error.message));
	}
		
		
async function callProtectedApi() {
	
	try {
	const token = await getAccessTokenSilently();
	const response = await axios.get("http://localhost:4000/protected", {
		headers: {
		authorization: `Bearer ${token}`,
		}
	})
	if(isAuthenticated === true) {		
		navigate('/Calculator')
	};
	console.log(response.data);
	} catch (error) {
	console.log(error.message);
	}}

return (
	
	<div className="App"
    style={{ 
		backgroundImage: `url("https://assets.pcinvasion.com/wp-content/uploads/2022/07/Genshin-Impact-unlock-golden-apple-archipelago-version-2.8--800x400.jpg")` 
	  }}
    >
      <header className="App-header">
        <img src={primo} className="App-logo" alt="logo" />
        <h2>
          Welcome to PrimoCalc!
        </h2>

      <ul>

	  	<li>
          <button onClick={loginWithRedirect}>Login with Redirect and go to calculator!</button>
        </li>

        <li>
          <button onClick={loginWithPopup}>Login with Popup</button>
        </li>
        
        <li>
          <button onClick={logout}>Logout</button>
        </li>

      </ul>

      <h4 className='user-status'><span>User is { isAuthenticated ? "logged in" : "not logged in"}</span></h4>
	  
	  <ul>
  <li>
    <button onClick={callApi}>Go to calculator without logging in!</button>
    </li>
  <li>
    <button onClick={callProtectedApi}>Go to calculator after logging in!</button>
    </li>

</ul>
	  
	  {/* {isAuthenticated && (
        <pre style={{textAlign: "start"}}> {JSON.stringify(user, null, 2)} </pre>       
      )} */}
	  
	  </header>
	</div>
);
};

export default Home;
