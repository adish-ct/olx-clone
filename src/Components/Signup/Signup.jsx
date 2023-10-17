import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { Link } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase-config';

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

  const submitForm = async (e) => {
    e.preventDefault()
    // check this section auth is not getting
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }

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



// import React, { useState, useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";

// import Logo from "../../olx-logo.png";
// import "./Signup.css";
// import { FirebaseContext } from "../../store/Context";

// export default function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   const { firebase } = useContext(FirebaseContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((result) => {
//         result.user.updateProfile({ displayName: username }).then(() => {
//              firebase
//              .firestore()
//   .collection("users")
//   .add({
//     id: result.user.uid,
//     username: username,
//     phone: phone,
//   })
//   .then(() => {
//     navigate("/login");
//   });
// });
// });
// };
//  …