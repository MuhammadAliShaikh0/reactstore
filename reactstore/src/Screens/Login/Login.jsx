import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleLogin}>
        <h1 style={{marginLeft:"30px"}}>Log In</h1><br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> <br /><br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
