import React from 'react'
import { useState } from 'react'
import './settings.css'

const Settings = props => {

  if (props.show) {
    return (
      <>
        <div className='set'>
          <div className='set-container'>
            <header className='set-container-header'>
              <h4>Search Filters</h4>
            </header>
            <main className='set-container-body'>
              <article className='article-1'>
                <div className='types-title'>Pokemon types</div>
                <div className='types'>
                  <div>
                    Normal
                  </div>
                  <div>
                    Fighting
                  </div>
                  <div>
                    Flying
                  </div>
                  <div>
                    Poison
                  </div>
                  <div>
                    Poison
                  </div>
                  <div>
                    Ground
                  </div>
                  <div>
                    Rock
                  </div>
                  <div>
                    Bug
                  </div>
                  <div>
                    Ghost
                  </div>
                  <div>
                    Steel
                  </div>
                  <div>
                    Fire
                  </div>
                  <div>
                    Water
                  </div>
                  <div>
                    Grass
                  </div>
                  <div>
                    Electric
                  </div>
                  <div>
                    Psychic
                  </div>
                  <div>
                    Ice
                  </div>
                  <div>
                    Dragon
                  </div>
                  <div>
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
                Close
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