import react from 'react'
import { goToPokedexPage } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import { Header } from '../../components/Header'
import { PokeCard } from '../../components/PokeCard'
import { Main } from './styled'

export const HomePage = () => {
    const history = useHistory()

    return (
        <div>
            <Header />
            <Main>
                <h1>Lista de Pokémons</h1>
                <div>
                    <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
                </div>
                <PokeCard />
            </Main>
        </div>
    )
}