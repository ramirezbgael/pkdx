import './App.css'
import WelcomeScreen from './components/Welcome/WelcomeScreen'
import PokemonsScreen from './components/Grid/PokemonsScreen'
import PokeInfoScreen from './components/Individual/PokeInfoScreen'

function App() {

  return (
    <div className='App'>
      <PokemonsScreen />
    </div>
  )
}

export default App
