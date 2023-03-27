import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../Pages/store/Context'
import Logo from '../../olx-logo.png';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
  const history = useHistory()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
        alert(error.message)
    }) 
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" alt='Logo' src={Logo}></img>
        <form onClick={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
