import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} />
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <div className="sign-up-content">
          <small>Don't have account ?</small>
          <Link to='/signup' className='link-item'><span className='m-3'>Sign Up</span> </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;
