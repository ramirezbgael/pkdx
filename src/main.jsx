import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import WelcomeScreen from './components/Welcome/WelcomeScreen'
import PokemonsScreen from './components/Grid/PokemonsScreen'
import PokeInfoScreen from './components/Individual/PokeInfoScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeScreen/>
  },
  {
    path: '/pokemons',
    element: <PokemonsScreen/>
  },
  {
    path: '/pokemons/:id',
    element: <PokeInfoScreen />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
