import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Skill from './components/Skill'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header/>
    <Home/>
    <Skill/>

    </>

    
  )
}

export default App
