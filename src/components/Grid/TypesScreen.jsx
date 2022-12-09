import React from 'react'
import PokemonCard from './Cards/typeCards'
import './types.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import Settings from './Settings/Settings'
import { useNavigate, useParams } from 'react-router-dom'

const PokemonsScreen = () => {

  const {type} = useParams()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState("true")
  const [show, setShow] = useState(false)
  const URL = `https://pokeapi.co/api/v2/type/${type}` 

  if(type){
    useEffect(() => {
      getData()
    }, [URL])
  }

  const handleToggle = () =>{
    setIsLoading("false")
  }

  const getData = () =>{
    axios.get(URL)
    .then((res) => {
      setData(res.data)
      setTimeout(()=>{
        handleToggle()
      }, 2000)
    })
  }


  const navigate = useNavigate()

  if(isLoading === "true"){
    return (
      <article className={`loading ${isLoading}`}>
        <img src={logo} alt="" />
      </article>
  )} else {
    return (
      <article className='pokemonsScreen'>
        <Settings show={show} onClose={() => setShow(false)}/>
        <header className='pokemonsScreen-header'>
            {/*Arrow*/}
            <div onClick={()=>navigate('/pokemons')} className='header-arrow'>
              <i className='arrow-btn bx bx-arrow-back'></i>
            </div>
            {/*Hamburger*/}
            <div className='header-menu'>
              <button onClick={() => setShow(true)} className='menu-btn-btn'>
                <i  className='menu-btn bx bx-cog'></i>
              </button>
            </div>
            {/*Navigation bar*/}
            <div className="header-title">
              <div className="header-title-container">
                <p>{data?.name} pokemons</p>
              </div>
            </div>
          <nav>
            {/*Navigation List*/}
            <ul className='list'>
              <li>
                home
              </li>
              <li>
                pokemons
              </li>
              <li>
                about
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <article className='card-zone'>
            {data?.pokemon.map(pokemon => <PokemonCard pokemon={pokemon} type={type} key={pokemon.name}/>)}
          </article>

        </section>
      </article>
    )
  }

  
}

export default PokemonsScreen