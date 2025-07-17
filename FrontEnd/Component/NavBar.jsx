import React from 'react'
import "./NavBar.css"
import AboutPage from './AboutPage'
import { Link } from 'react-router-dom';
import LoginScreen from './LoginScreen';
const NavBar = () => {
  return (
    <>
    <div className='navbar'>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
            <Link to='/about'>About</Link>
        </p>
        <p >
            <Link to="/PostPage">Post</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
    </div>
    </>
  )
}

export default NavBar
