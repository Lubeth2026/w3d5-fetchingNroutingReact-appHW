
import { Route, Routes } from 'react-router'
import Navbar from '../Navbar'
import './App.css'
import API from "./pokemonApp/API"
import Home from './pokemonApp/Home'
import Pokemon from './pokemonApp/Pokemon'

function App() {
  

  return (
    <>
      <Navbar/>
      <h1>React Router App Week 3 Day 5</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<API/>}/>
      </Routes>
    </>
  )
}

export default App
