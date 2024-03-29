
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {

    if (!isEmailValid(email)) {
        toast.warning('Please enter a valid email address');
        return;
      }


    if(!email || !password){
        toast.warning("Please enter both the fields!")
    }
  };

  return (
  <section className='signUp'>
      <div className='signform'>
      <h2>Sign Up</h2>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login Here</Link>
      </p>
    </div>
  </section>
  );
};

export default SignUp;
