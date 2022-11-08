import * as React from 'react'
import { Pokemon } from '../../models'
import { PokemonItem } from './components/PokemonItem'
import './PokemonList.css'

export interface PokemonListProps {
    pokemonList: Pokemon[]
}

export function PokemonList({ pokemonList }: PokemonListProps) {
    return (
        <div className="pokemon__list">
            {pokemonList?.map((pokemon: Pokemon) => (
                <PokemonItem pokemon={pokemon} key={pokemon.name} />
            ))}
        </div>
    )
}
