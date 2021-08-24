import React from 'react'
import { useHistory } from 'react-router'
import { Header } from '../../components/Header'
import { PokeCard } from '../../components/PokeCard'
import { goToHomePage, goToPokemonDetailsPage } from '../../routes/coordinator'
import { Main } from '../HomePage/styled'


export const PokedexPage = () => {
    const history = useHistory()

    return (
        <div>
            <Header />
            <Main>
                <h1>Pokedex</h1>
                <button onClick={() => goToHomePage(history)}>Voltar para Lista</button>
                <PokeCard />
            </Main>
        </div>
    )
}