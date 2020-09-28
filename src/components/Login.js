import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../database/firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage...
        history.push('/');
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created an user and logged in...
        history.push('/');
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className='login_form'>
        <h1>Sign In</h1>
        <form>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type='submit'>
            Sign In
          </button>
        </form>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga
          dolorem odio! Dolorum accusantium expedita dolorem, alias deleniti
          eaque earum.
        </p>
        <button onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
