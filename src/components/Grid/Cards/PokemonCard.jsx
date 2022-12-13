import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import './pokemonCard.css'
import getType from '../../Pokemons/hooks/type'
import back from '/src/assets/logoWhite.png'
import { useNavigate, useParams, Link } from 'react-router-dom'

const PokemonCard = ({ pokemon }) => {
  const URL = pokemon.url
  const [data, setData] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const { ptype, id } = getType(URL)
  const onClick = () => {
    navigate(`/pokemons/${id}`)
  }


  return (
    <Link className='pkm-link' to={id}>
      <article onClick={() => { onClick() }} className={`${ptype} pokemon-card`}>
        <p className='pkm-name'>{pokemon.name}</p>
        <div className="pkm-type-container">
          <p className='pkm-type'>{ptype}</p>
        </div>
        <div className='pkm-image-container'>
          <img className='pkm-image' src={data?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
      </article>
    </Link>
  )
}

export default PokemonCard