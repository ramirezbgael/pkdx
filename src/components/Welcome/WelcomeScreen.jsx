import React from 'react'
import logo from '/src/assets/logo.png'
import './welcome.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

const WelcomeScreen = () => {
  const navigate = useNavigate()
  
  const [name, setName] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (name){
      navigate('/pokemons')
    } else {
      navigate('/')
      alert('Sorry, we need your name to continue')
    }
  }


  return (
    <div className='welcome'>
      <aside className='welcome-aside'>
        <img src={logo} alt="" />
      </aside>

      <main className='welcome-main'>
        <div className="main-text">
          <div className='main-text-title'>
            <h1>Welcome trainer!</h1>
          </div>

          <div className="main-text-subtitle">
            <p>Tell us your name to start:</p>
          </div>
        </div>

        <div className="main-form">
          <form onSubmit={handleSubmit} action="">
            <div>
              <input 
              placeholder='Ash Ketchum' 
              className='main-form-input' 
              type="text"
              onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <button className='main-form-button'>
                <p>Let's go!</p>
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className='welcome-footer'>
        <a href="https://github.com/ramirezbgael" target='blank'>github/ramirezbgael</a>
        <p>&copy; 2022</p>
      </footer>
    </div>
  )
}

export default WelcomeScreen