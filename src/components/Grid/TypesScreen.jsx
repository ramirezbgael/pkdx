import React from 'react'
import PokemonCard from './Cards/typeCards'
import './types.css'
import axios from 'axios'
import './pokemonsScreen.css'
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
      }, 1000)
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
      <article className='ps'>
        <Settings show={show} onClose={() => setShow(false)}/>
        <header className='ps-header'>
          <div onClick={()=>navigate('/pokemons')} className='h1-types'>Pokedex <br></br>{'>'} {data.name} type</div>
          <div className="set-btn">
              <i onClick={()=>setShow(true)} className='bx bx-sort-a-z'></i>
          </div>
        </header>
        <section>
          <article className='card-zone cz-types'>
            {data?.pokemon.map(pokemon => <PokemonCard pokemon={pokemon} type={type} key={pokemon.name}/>)}
          </article>
        </section>
        <footer>
            <i target='blank' href='https://github.com/ramirezbgael/pkdx' className='bx bxl-github'>
              </i>
        </footer>
      </article>
    )
  }

  
}

export default PokemonsScreen