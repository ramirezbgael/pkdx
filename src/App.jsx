import './App.css'
import WelcomeScreen from './components/Welcome/WelcomeScreen'
import PokemonsScreen from './components/Grid/PokemonsScreen'
import PokeInfoScreen from './components/Individual/PokeInfoScreen'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import { useState } from 'react'
import TypeInfoScreen from './components/Individual/TypeInfoScreen'
import TypesScreen from './components/Grid/TypesScreen'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<WelcomeScreen/>} />
      <Route element={<ProtectedRoutes/>}>
        <Route path='/pokemons' element={<PokemonsScreen/>} />
        <Route path='/pokemons/:id' element={<PokeInfoScreen/>} />
        <Route path='/pokemons/types/:type' element={<TypesScreen/>}/>
        <Route path='/pokemons/types/:type/:id' element={<TypeInfoScreen/>}/>
      </Route>
    </Routes>
  )
}

export default App
