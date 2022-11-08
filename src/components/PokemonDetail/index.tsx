import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './PokemonDetail.css'

export interface PokemonDetailProps {}

export function PokemonDetail(props: PokemonDetailProps) {
    const [pokemonItem, setPokemonItem] = useState<any>(null)
    const params = useParams()

    useEffect(() => {
        const getPokemonDetail = async () => {
            try {
                const { data }: any = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${params.name}`
                )
                setPokemonItem(data)
            } catch (error) {
                console.log(error)
            }
        }

        getPokemonDetail()
    }, [])

    return (
        <div className="pokemon__detail">
            <div className="pokemon__detail--back">
                <Link to="/" className="btn-back">
                    <i className="fa-solid fa-angle-left"></i>
                    Back
                </Link>
            </div>
            {pokemonItem && (
                <div className="pokemon__content">
                    <div className="pokemon__content--img">
                        <img
                            src={pokemonItem.sprites.other.home.front_default}
                            alt={params?.name}
                            loading="lazy"
                        />
                    </div>
                    <div className="pokemon__content--info">
                        <h3 className="pokemon__content-title">{pokemonItem.name}</h3>
                        <table className="pokemon__content--table">
                            <tr className="pokemon__table--row pokemon__table--abilities">
                                <td>Abilities</td>
                                <td className="pokemon__table--info-list">
                                    {pokemonItem.abilities.map((x: any) => (
                                        <span>{x.ability.name}</span>
                                    ))}
                                </td>
                            </tr>
                            <tr className="pokemon__table--row pokemon__table--abilities">
                                <td>Game indices</td>
                                <td className="pokemon__table--info-list">
                                    {pokemonItem.game_indices.map((x: any) => (
                                        <span>{x.version.name}</span>
                                    ))}
                                </td>
                            </tr>
                            <tr className="pokemon__table--row pokemon__table--abilities">
                                <td>Height</td>
                                <td>{pokemonItem.height}kg</td>
                            </tr>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}
