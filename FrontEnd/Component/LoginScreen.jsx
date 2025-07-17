import React from 'react';
import './LoginScreen.css';

const LoginScreen = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input type="text" required name="username" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input type="password" required name="password" placeholder="Enter your password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
