import React from 'react'
import logo from '../../assets/logo.png'
import './pokemonsScreen.css'

const Loading = () => {
  return (
    <div className='loading'>
      <img src={logo} alt="" />
    </div>
  )
}

export default Loading