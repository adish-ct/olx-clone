import React, { useContext, useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../store/Context';

function Login() {

  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // getting email
  const getEmail = (event) => setEmail(event.target.value);

  // getting password
  const getPassword = (event) => setPassword(event.target.value);


  // logic for login form submit
  const submitLoginForm = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(firebase.auth, email, password);

      // using .then promise
      // signInWithEmailAndPassword(firebase.auth, email, password).then((userCredential) => {
      //   const user = userCredential.user;
      //   console.log(user);
      //   navigate('/')
      // })

      // Access the user information
      const user = userCredential.user;

      // Now you can use the user object if needed
      console.log('Logged in user:', user);
      navigate('/');
    } catch {
      alert("username and password is not matching.");
    }
  }

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
            onChange={getEmail}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={getPassword}
          />
          <br />
          <br />
          <button onClick={submitLoginForm} >Login</button>
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
