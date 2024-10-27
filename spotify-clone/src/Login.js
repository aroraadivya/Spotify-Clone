import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <h1>I'm the login page</h1>
            <img src="spotifyLogo.png" alt='Logo'/>
            {/* spotify logo
            Login with spotify button */}
            <button>LOGIN WITH SPOTIFY</button>
        </div>
    );
}

export default Login;