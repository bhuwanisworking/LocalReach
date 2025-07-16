import React from 'react'
import "./NavBar.css"
import AboutPage from './AboutPage'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div className='navbar'>
        <p>Home</p>
        <p>
            <Link to='/about'>Go to About Page</Link>
        </p>
        <p >
            <Link to="/PostPage">Welcome to the Post Page</Link>
        </p>
    </div>
    </>
  )
}

export default NavBar
