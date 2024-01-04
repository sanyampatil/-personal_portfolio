import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Skill from './components/Skill'
import Services from './components/Services'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header/>
    <Home/>
    <Skill/>
    <Services/>

    </>

    
  )
}

export default App
