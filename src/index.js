import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';


ReactDOM.render(
<React.StrictMode>
<Auth0Provider
    domain='dev-kxzdsd6y.us.auth0.com'
    clientId='FC2Oznth8wYMWOjecmgfGgRT7bh8ugGg'
    redirectUri={window.location.origin}
    audience="unique"
    scope="openid profile email"
    >

    
    <App />
    

    </Auth0Provider>
</React.StrictMode>,
document.getElementById('root')
);

