import React from 'react';
import primo from '../Item_Primogem.webp'

const Contact = () => {
return (
	<div className="App"
    style={{ 
		backgroundImage: `url("https://assets.pcinvasion.com/wp-content/uploads/2022/07/Genshin-Impact-unlock-golden-apple-archipelago-version-2.8--800x400.jpg")` 
	  }}>
	<header className="App-header">
	<img src={primo} className="App-logo" alt="logo" />
		<h5>Email: saelee_calvin@yahoo.com</h5>
		<p><a href="https://www.linkedin.com/in/calvin-saelee/">LinkedIn</a></p>
		<p><a href="https://github.com/saeleeca">Github</a></p>
		<img src={primo} className="App-logo2" alt="logo" />
	</header>
	
	</div>
);
};

export default Contact;
