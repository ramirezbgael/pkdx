import React from 'react'
import './pokeInfoScreen.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import About from './tables/About'

const PokeInfoScreen = () => {
  const [info, setInfo] = useState()
  const { id } = useParams()
  
  const getInfo = () =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res=>setInfo(res.data))
  }
  
  useEffect(() => {
    getInfo()
  }, [])

  const [selection, setSelection] = useState("About")

  const infoClick = () =>{
    setSelection("Stats")
  }
  
  const type = info?.types[0].type.name
  const namex = info?.species.name

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let name
  if (namex) {
    name = capitalizeFirstLetter(namex)
  }

  
  return (
    <div className={`infoScreen ${type}`}>
      <header className='infoScreen-header'>
        <div className="header-container">
          {/*Arrow*/}
          <div className='header-arrow'>
            <i className='arrow-btn bx bx-arrow-back'></i>
          </div>
          {/*Heart*/}
          <div className='header-menu'>
            <i className='bx bx-heart'></i>
          </div>
          {/*Navigation bar*/}
          <div className="header-title">
            <div className="header-title-container">
              <p>{name}</p>
            </div>
          </div>
          <div className='title-circle'>
            <p>{type}</p>
          </div>
        </div>
      </header>

        <div className="bulbasaur-container">
          <img className='bulbasaur' src={info?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
      <table className='info-card'>
        <tr className='card-nav'>
          <th className='active'>About</th>
        </tr>
        <section className="info">
          <About info={info}/>
        </section>
      </table>
    </div>
  )
}

export default PokeInfoScreen