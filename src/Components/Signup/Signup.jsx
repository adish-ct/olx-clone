import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { Link } from 'react-router-dom';

export default function Signup() {

  // create state for fetching username
  const [username, setUsername] = useState('')
  const getUsername = (e) => {
    setUsername(e.target.value)
  }

  // create state for fetching email
  const [email, setEmail] = useState('')
  const getEmail = (event) => {
    setEmail(event.target.value)
  }



  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            onChange={getUsername}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={getEmail}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <div className="d-flex gap-3 m-2">
          <span>Have account ?</span><Link to='/login' className='link-item text-primary'>Login</Link>
        </div>
      </div>
    </div>
  );
}
