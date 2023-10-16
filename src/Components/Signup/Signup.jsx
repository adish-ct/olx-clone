import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { Link } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';

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

  // create state for fetching phone
  const [phone, setPhone] = useState('')
  const getPhone = (event) => {
    setPhone(event.target.value)
  }

  // create state for fetching password
  const [password, setPassword] = useState('')
  const getPassword = (event) => {
    setPassword(event.target.value)
  }

  const submitForm = () => {
    console.log(working);
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
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            onChange={getEmail}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            onChange={getPhone}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={getPassword}
          />
          <br />
          <br />
          <button onClick={submitForm}>Signup</button>
        </form>
        <div className="d-flex gap-3 m-2">
          <span>Have account ?</span><Link to='/login' className='link-item text-primary'>Login</Link>
        </div>
      </div>
    </div>
  );
}
