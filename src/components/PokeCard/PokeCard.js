import styled from 'styled-components'
import { goToPokemonDetailsPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalContext'

const CardContainer = styled.div`
    border-radius: 10px;
    width: 220px;
    background-color: gainsboro;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
        font-family: monospace;
        font-size: 20px;
        text-align: center;
    }
    img {
        width: 150px;
    }
    div {
        display: flex;
        /* justify-content: space-evenly; */
        button {
            width: 110px;
        }
    }
`


export const PokeCard = ({pokemon, isPokedex}) => {
    const history = useHistory()
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const addToPokedex = () => {
        const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)

        const newPokeList = [...pokemons]
        newPokeList.splice(pokeIndex, 1)
        const orderedPokemons= newPokeList.sort((a, b) => {return a.id - b.id})

        const newPokedexList = [...pokedex, pokemon]
        const orderedPokedex = newPokedexList.sort((a, b) => {return a.id - b.id})

        setPokedex(orderedPokedex)
        setPokemons(orderedPokemons)
    }

    const removeFromPokedex = () => {
        const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)

        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex, 1)
        const orderedPokedex = newPokedexList.sort((a, b) => {return a.id - b.id})

        const newPokeList = [...pokemons, pokemon]
        const orderedPokemons = newPokeList.sort((a, b) => {return a.id - b.id})

        setPokemons(orderedPokemons)
        setPokedex(orderedPokedex)
    }

    return (
        <CardContainer>
            <img src={pokemon.sprites.front_default && pokemon.sprites.front_default} alt={pokemon.name && pokemon.name}/>
            <h4>{pokemon.name && pokemon.name.toUpperCase()}</h4>
            <div>
                <button onClick={isPokedex ? removeFromPokedex : addToPokedex}>
                    {isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
                </button>
                <button onClick={() => goToPokemonDetailsPage(history, pokemon.name && pokemon.name)}>
                   Ver Detalhes
                </button>
            </div>
        </CardContainer>
    )
}