import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import './pokemonCard.css'
import getType from '../../Pokemons/hooks/type'
import back from '/src/assets/logoWhite.png'
import { useNavigate, useParams, Link } from 'react-router-dom'

const PokemonCard = ({pokemon, type}) => {
  const URL = pokemon.pokemon.url
  const [data, setData] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(URL)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  const { ptype, id} = getType(URL)
  const onClick = () =>{
    navigate(`/pokemons/types/${type}/${id}`)
  }

  console.log(ptype)
     
  return (
    <Link to={id}>
    <article onClick={() =>{onClick()}} className={`${ptype} pokemon-card`}>
      <section className='card-text'>
        <p>{pokemon.pokemon.name}</p>
        <p className='pkm-number'>{'#'}{data?.id}</p>
        <div className='type-container'>
          <p className='type'>{ptype}</p>
        </div>
      </section>
      <aside className='card-img'>
        <img src={data?.sprites.other['official-artwork'].front_default} alt="" />
      </aside>
      <footer className='background'>
        <img src={back} alt="" />
      </footer>
    </article>
    </Link>
  )
}

export default PokemonCard