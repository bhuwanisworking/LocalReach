import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../Component/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from '../Component/AboutPage'
import PostPage from '../Component/PostPage'
import axios from "axios"
import { useEffect } from 'react'
import HomePage from '../Component/HomePage'
import LoginScreen from '../Component/LoginScreen'

function App() {
  const [msg,setmsg]=useState("")
  
  useEffect(()=>{
    axios.get("http://localhost:3000/about")
    .then((res)=>{
      console.log("hello urray you connected both frotnend and Backend successFully")
      setmsg("Connected SuccessFully")

    })
    .catch((err)=>{
      console.log("there is error while connecting")
    })
    // wont run on every rerender thsts why an empty array is added
  },[])

  return (
    <>
    <Router>
        
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path="/PostPage" element={<PostPage></PostPage>}></Route>
          <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
        </Routes>

    </Router>
    </>
  )
}

export default App
