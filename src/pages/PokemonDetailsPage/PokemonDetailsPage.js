import React from 'react'
import { goBack } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import { Header } from '../../components/Header'
import { Main } from '../HomePage/styled'

export const PokemonDetailsPage = () => {
    const history = useHistory()

    return (
        <div>
            <Header />
            <Main>
                <h1>Pokémon</h1>
                <h2>Detalhes</h2>
                <button onClick={() => goBack(history)}>Voltar</button>
            </Main>
        </div>
    )
}