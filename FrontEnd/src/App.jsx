import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../Component/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from '../Component/AboutPage'
import PostPage from '../Component/PostPage'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path="/PostPage" element={<PostPage></PostPage>}></Route>
        </Routes>

    </Router>
    </>
  )
}

export default App
