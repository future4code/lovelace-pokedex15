import React from 'react'
import { goToPokemonDetailsPage } from '../routes/coordinator'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const CardContainer = styled.div`
    border: 1px solid black;
    width: 180px;
`


export const PokeCard = () => {
    const history = useHistory()

    return (
        <CardContainer>
            <h6>Bulbasaur (foto)</h6>
            <button>Adicionar</button>
            <button onClick={() => goToPokemonDetailsPage(history)}>Detalhes</button>
        </CardContainer>
    )
}