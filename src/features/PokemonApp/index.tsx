import axios from 'axios'
import { useEffect, useState } from 'react'
import { PokemonList } from '../../components/PokemonList'
import { Pokemon } from '../../models'
import './PokemonApp.css'

export interface PokemonAppProps {}

export function PokemonApp(props: PokemonAppProps) {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getPokemonList = async () => {
            try {
                setLoading(true)
                const { data }: any = await axios.get('https://pokeapi.co/api/v2/pokemon')
                console.log(data)
                setPokemonList(data.results)
                setNextUrl(data.next)
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        getPokemonList()
    }, [])

    const handleLoadData = async () => {
        try {
            setLoading(true)
            const { data }: any = await axios.get(nextUrl)
            setNextUrl(data.next)
            setPokemonList((p) => [...p, ...data.results])
        } catch (error) {
            console.log(error)
        }

        setLoading(false)
    }

    return (
        <div className="pokemon__app">
            <h2 className="pokemon__title">Pokemon</h2>
            <div className="pokemon-list">
                <PokemonList pokemonList={pokemonList} />
            </div>
            <button className="btn-next" disabled={loading} onClick={handleLoadData}>
                {loading ? 'Loading...' : 'Load more'}
            </button>
        </div>
    )
}
