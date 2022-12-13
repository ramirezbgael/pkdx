import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './settings.css'
import TypesScreen from '../TypesScreen'

const Settings = props => {

  const navigate = useNavigate()

  const navigateType = (type) =>{
    navigate(`/pokemons/types/${type}`)
  }

  if (props.show) {
    return (
      <>
        <div className='set'>
          <div className='set-container'>
            <header className='set-container-header'>
              <h4>Search Filters</h4>
              <div className='types-title'>Pokemon types</div>
            </header>
            <main className='set-container-body'>
              <article className='article-1'>
                <div className='types'>
                  <div onClick={()=>navigateType(1)}>
                    Normal
                  </div>
                  <div onClick={()=>navigateType(2)}>
                    Fighting
                  </div>
                  <div onClick={()=>navigateType(3)}>
                    Flying
                  </div>
                  <div onClick={()=>navigateType(4)}>
                    Poison
                  </div>
                  <div onClick={()=>navigateType(5)}>
                    Ground
                  </div>
                  <div onClick={()=>navigateType(6)}>
                    Rock
                  </div>
                  <div onClick={()=>navigateType(7)}>
                    Bug
                  </div>
                  <div onClick={()=>navigateType(8)}>
                    Ghost
                  </div>
                  <div onClick={()=>navigateType(9)}>
                    Steel
                  </div>
                  <div onClick={()=>navigateType(10)}>
                    Fire
                  </div>
                  <div onClick={()=>navigateType(11)}>
                    Water
                  </div>
                  <div onClick={()=>navigateType(12)}>
                    Grass
                  </div>
                  <div onClick={()=>navigateType(13)}>
                    Electric
                  </div>
                  <div onClick={()=>navigateType(14)}>
                    Psychic
                  </div>
                  <div onClick={()=>navigateType(15)}>
                    Ice
                  </div>
                  <div onClick={()=>navigateType(16)}>
                    Dragon
                  </div>
                  <div onClick={()=>navigateType(18)}>
                    Fairy
                  </div>
                </div>
              </article>
            </main>
            <footer className='set-container-footer'>
              <button 
                className='footer-button'
                onClick={props.onClose}
              >
                <p>Close</p>
              </button>
            </footer>
          </div>
        </div>
      </>
    )
  } else {
    return null
  }

}


export default Settings