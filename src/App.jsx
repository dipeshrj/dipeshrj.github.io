
import { useState } from 'react'
import './App.css'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {
  const [toggle,setToggle] = useState(1)

  return (
    <div className='app'>
      <div className='nav_bar'>
        <div className='nav_bar-links'>
        <p onClick={()=>setToggle(1)}>Home</p>
        <p onClick={()=>setToggle(2)}>About</p>
        <p onClick={()=>setToggle(3)}>Projects</p>
        </div>
      </div>
      {toggle === 1 && <Profile />}
      {toggle === 2 && <About />}
      {toggle === 3 && <Projects />}

      
      
    </div>

  )
}

export default App
