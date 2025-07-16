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
    // wont run on every rerender
  },[])

  return (
    <>
    <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path="/PostPage" element={<PostPage></PostPage>}></Route>
        </Routes>

    </Router>
    <p>{msg}</p>
    </>
  )
}

export default App
