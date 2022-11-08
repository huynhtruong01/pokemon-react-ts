import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pokemon } from '../../../../models'
import './PokemonItem.css'

export interface PokemonItemProps {
    pokemon: Pokemon
}

export function PokemonItem({ pokemon }: PokemonItemProps) {
    const [pokemonItem, setPokemonItem] = useState<any>(null)

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const { data }: any = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                )
                setPokemonItem(data)
            } catch (error) {
                console.log(error)
            }
        }
        getPokemon()
    }, [])

    return (
        <Link to={`/${pokemon.name}`}>
            <div className="pokemon">
                <h4>{pokemon.name}</h4>
                {pokemonItem && (
                    <div>
                        <img
                            src={pokemonItem?.sprites?.front_default}
                            alt={pokemon.name}
                            loading="lazy"
                        />
                    </div>
                )}
            </div>
        </Link>
    )
}
