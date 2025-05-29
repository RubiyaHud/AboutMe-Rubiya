import RootLayout from './components/layouts/RootLayout'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/layouts/Home'
import Header from './components/layouts/Header'

function App() {


  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
