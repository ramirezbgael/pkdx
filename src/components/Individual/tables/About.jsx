import React from 'react'
import './about.css'
import ProgressBar from './Bar'

const About = ({ info }) => {

  console.log(info)
  return (
    <div className='infoscreen'>
        <div className="info-header">
          <div className="header-title-container">
            <p>{info?.name}</p>
          </div>
          <div className='title-circle'>
            <p>{info?.types[0].type.name}</p>
          </div>
        </div>
        <div className='about'>
          <div className="left-side">
            <h5>About</h5>
            <div className='about-container'>
              <div className='column-one'>
                <p>Height</p>
                <p>Weight</p>
                <p>Abilities</p>
              </div>
              <div className='column-two'>
                <p>{info?.height * 10} cm</p>
                <p>{info?.weight / 10} kg</p>
                <p>{info?.abilities[0].ability.name},&nbsp;{info?.abilities[1].ability.name}</p>
              </div>
            </div>
            &nbsp;
            <h5>Stats</h5>
            <div className='stats-container'>
              <div className='stats-column-one'>
                <p>HP</p>
                <p>Attack</p>
                <p>Defense</p>
                <p>Speed</p>
              </div>
              <div className='stats-column-two'>
                <p className='hp'>
                  {info?.stats[0].base_stat}
                  <ProgressBar
                    key={'idx'}
                    bgcolor={'blue'}
                    completed={info?.stats[0].base_stat}
                  />
                </p>
                <p className='attack'>
                  {info?.stats[1].base_stat}
                  <ProgressBar
                    key={'idx'}
                    bgcolor={'blue'}
                    completed={info?.stats[1].base_stat}
                  />
                </p>
                <p className='defense'>
                  {info?.stats[2].base_stat}
                  <ProgressBar
                    key={'idx'}
                    bgcolor={'green'}
                    completed={info?.stats[2].base_stat}
                  />
                </p>
                <p className='speed'>
                  {info?.stats[5].base_stat}
                  <ProgressBar
                    key={'idx'}
                    bgcolor={'red'}
                    completed={info?.stats[5].base_stat}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className='photo-container'>
              <img className='photo' src={info?.sprites.other['official-artwork'].front_default} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About