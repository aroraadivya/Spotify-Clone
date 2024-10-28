import React from 'react';
import './Login.css'
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className='login'>
            <img src="https://tse1.mm.bing.net/th?id=OIP.cZl2awXp3fI5rEyhqoIkdAHaEK&pid=Api&P=0&h=180" alt=""/>
            
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;