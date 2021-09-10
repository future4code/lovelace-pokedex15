import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToPokedexPage } from '../../routes/coordinator'

const HeaderContainer = styled.div`
    border: 1px solid orangered;
    color: yellow;
    background-color: orangered;
    display: flex;
    justify-content: center;
    width: 100%;
`

const RightButton = styled.button`
    position: absolute;
    right: 20px;
    align-self: center;
`
const LeftButton = styled.button`
    position: absolute;
    left: 20px;
    align-self: center;
`

export const Header = ({title, leftButtonFunction, showRightButton}) => {
    const history = useHistory()

    const leftButtonTitle = () => {
        switch (title) {
            case "Pokémons":
                return "Ir para Pokédex";
            case "Pokédex":
                return "Voltar para PokeList"
            default:
                return "Voltar"
        }
    }

    return (
        <HeaderContainer>
            <LeftButton onClick={leftButtonFunction}>{leftButtonTitle()}</LeftButton>
            <h1>{title}</h1>
            {showRightButton &&
                <RightButton onClick={() => goToPokedexPage(history)}>Ir para Pokedex</RightButton>
            }
        </HeaderContainer>
    )
}