import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState('');  

  const signIn = e => {
    e.preventDefault()
  }

  const signUp = e => {
    e.preventDefault();
  }

    return (
        <div className="login">
          <Link to= '/'>
          <img
          className="login_logo"
          src='http://icon-park.com/imagefiles/book2_icon_turquoise_blue.png'>
          </img>
          </Link>

          <div className='login_container'>
            <h1>Sign In</h1>
            <form>
              <h5>Username</h5>
              <input type='text' value= {username} onChange = 
              { e => setUsername(e.target.value) }/>

              <h5>Password</h5>
              <input type='password' value= {password} onChange = 
              { e => setPassword(e.target.value) }/> 

              <button type = 'submit' onClick = { signIn } 
              className='signInButton'>Sign In
              </button>
            </form>

            <p>By signing in you agree to our Conditions of Use and Sale.</p>

            <button onClick = { signUp } className='signUpButton'>Sign Up</button>

            </div>
        </div>
        
        );
}
    
  export default Login;  