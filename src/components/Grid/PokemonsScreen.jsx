import React from 'react'
import PokemonCard from './Cards/PokemonCard'
import './pokemonsScreen.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import Settings from './Settings/Settings'
import { useNavigate } from 'react-router-dom'

const PokemonsScreen = () => {

  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState("true")
  const [show, setShow] = useState(false)


  const handleToggle = () =>{
    setIsLoading("false")
  }
  const [URL, setURL] = useState('https://pokeapi.co/api/v2/pokemon/?limit=10')

  const getData = () =>{
    axios.get(URL)
    .then((res) => {
      setData(res.data)
      setTimeout(()=>{
        handleToggle()
      }, 2000)
    })
  }

  useEffect(() => {
    getData()
  }, [URL])
  
  setTimeout(() => {
    if(data){
      waitPhoto(data)
    }
  }, 100);

  const waitPhoto = (data) =>{
    const URL2 = data.results[0].url
    axios.get(URL2)
      .then(res => {
        if(res.data.sprites.back_default){
          setIsLoading("false")
        }
      })
      .catch(err =>{
        console.log(err)
      })
    
  }

  const prevPage = () =>{
    setURL(data?.previous)
    console.log(URL)
    getData()
    setIsLoading("true")
    setTimeout(()=>{
      setIsLoading("false")
    },900)
  }
  
  const nextPage = () =>{
    setURL(data?.next)
    console.log(URL)
    getData()
    setIsLoading("true")
    setTimeout(()=>{
      setIsLoading("false")
    },900)
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
            <div onClick={()=>navigate('/')} className='header-arrow'>
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
                <p>POKEDEX</p>
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
            {data?.results.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name}/>)}
          </article>

          <article className='pages'>
            <button onClick={() => prevPage()}><i className='bx left bx-left-arrow-alt'></i></button>
            <button onClick={() => nextPage()}><i className='bx right bx-right-arrow-alt'></i></button>
          </article>
        </section>
      </article>
    )
  }

  
}

export default PokemonsScreen