import React from 'react'
import './pokeInfoScreen.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import About from './tables/About'
import logosil from '../../assets/logoWhite.png'

const PokeInfoScreen = () => {
  const [info, setInfo] = useState()
  const { id } = useParams()
  const [heart, setHeart] = useState('bx bx-heart')
  
  const getInfo = () =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res=>setInfo(res.data))
  }
  
  useEffect(() => {
    getInfo()
  }, [])
  
  const ptype = info?.types[0].type.name
  const namex = info?.species.name

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function heartClick (){
    if(heart === 'bx bxs-heart'){
      setHeart('bx bx-heart')
    } else {
      setHeart('bx bxs-heart')
    }
  }

  const {type} = useParams()

  const navigate = useNavigate()
  function backClick (){
    navigate(`/pokemons/types/${type}`)
  }

  let name
  if (namex) {
    name = capitalizeFirstLetter(namex)
  }

  
  return (
    <div className={`infoScreen ${ptype}`}>
      <header className='infoScreen-header'>
        <div className="header-container">
          {/*Arrow*/}
          <div className='header-arrow'>
            <i onClick={backClick} className='arrow-btn bx bx-arrow-back'></i>
          </div>
          {/*Heart*/}
          <div className='header-menu'>
            <i onClick={heartClick} className={heart}></i>
          </div>
          {/*Navigation bar*/}
          <div className="header-title">
            <div className="header-title-container">
              <p>{name}</p>
            </div>
          </div>
          <div className='title-circle'>
            <p>{ptype}</p>
          </div>
        </div>

        <img className='logo' src={logosil} alt="" />
      </header>

        <div className="bulbasaur-container">
          <img className='bulbasaur' src={info?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
      <table className='info-card'>
        <section className="info">
          <About info={info}/>
        </section>
      </table>
    </div>
  )
}

export default PokeInfoScreen