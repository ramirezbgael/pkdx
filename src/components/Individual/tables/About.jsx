import React from 'react'
import './about.css'

const About = ({info}) => {
  return (
    <div className='about'>
      <table>
        <tbody>
          <tr>
            <td>Species</td>
            <td><b>{info?.types[0].type.name}</b></td>
          </tr>
          <tr>
            <td>Height</td>
            <td><b>{(info?.height) * 10} cm</b></td>
          </tr>
          <tr>
            <td>Weight</td>
            <td><b>{(info?.weight) / 10} kg</b></td>
          </tr>
          <tr>
            <td>Abilities</td>
            <td><b>{info?.abilities[0].ability.name}</b></td>
            <td><b>{info?.abilities[1].ability.name}</b></td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HP</td>
            <td><b>{info?.stats[0].base_stat}</b></td>
          </tr>
          <tr>
            <td>Attack</td>
            <td><b>{info?.stats[1].base_stat}</b></td>
          </tr>
          <tr>
            <td>Defense</td>
            <td><b>{info?.stats[2].base_stat}</b></td>
          </tr>
          <tr>
            <td>Speed</td>
            <td><b>{info?.stats[5].base_stat}</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default About