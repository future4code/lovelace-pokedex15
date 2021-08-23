import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    border: 1px solid orangered;
    color: yellow;
    background-color: orangered;
    display: flex;
    justify-content: center;
`

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>Pokémon (header)</h1>
        </HeaderContainer>
    )
}