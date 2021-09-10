import { Main, TitleContainer } from './styled'
import { PokeCard } from '../../components/PokeCard/PokeCard'
import { GlobalStateContext } from '../../global/GlobalContext'
import { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { goToPokedexPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

export const HomePage = () => {
    const {pokemons} = useContext(GlobalStateContext)
    const history = useHistory()

    return (
        <div>
            <Header title={"Pokémons"} leftButtonFunction={() => goToPokedexPage(history)} />
            <TitleContainer>Lista de Pokémons</TitleContainer>
            <Main>
                {
                    pokemons.map((poke) => {
                        return <PokeCard key={poke.name} pokemon={poke}/>
                    })
                }
            </Main>  
        </div>
    )
}