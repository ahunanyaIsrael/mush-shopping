import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Button from './static/common/Button'
import Contact from './components/Contact'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <Contact />
      <NavBar />
      <Hero />
    </>
  )
}

export default App
