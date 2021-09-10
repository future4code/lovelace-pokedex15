import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { PokeCard } from '../../components/PokeCard/PokeCard'
import { GlobalStateContext } from '../../global/GlobalContext'
import { goBack, goToHomePage } from '../../routes/coordinator'
import { TitleContainer } from '../HomePage/styled'
import { MainContainer } from '../PokedexPage/styled'


export const PokedexPage = () => {
    const history = useHistory()
    const {pokedex} = useContext(GlobalStateContext)


    return (
        <div>
            <Header title={"Pokédex"} leftButtonFunction={() => goToHomePage(history)} />
            <TitleContainer>Minha Pokédex</TitleContainer>
            <MainContainer>
                {pokedex && pokedex.map((poke) => {
                    return <PokeCard key={poke.name} isPokedex pokemon={poke} />
                })}
            </MainContainer>
        </div>
    )
}