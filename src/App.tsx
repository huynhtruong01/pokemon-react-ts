import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PokemonDetail } from './components/PokemonDetail'
import { PokemonApp } from './features/PokemonApp'

function App() {
    return (
        <div className="pokemon__container">
            <Routes>
                <Route path="/" element={<PokemonApp />} />
                <Route path="/:name" element={<PokemonDetail />} />
            </Routes>
        </div>
    )
}

export default App
