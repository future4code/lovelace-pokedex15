import styled from 'styled-components'

export const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Details = styled.div`
    display: flex;
    /* background-color: gainsboro; */
    box-shadow: 2px 2px 5px 2px LightGrey;
    border-radius: 10px;
    padding: 10px 30px;
    justify-content: center;
`

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 10px 30px;
    img {
        width: 200px;
    }
    h2 {
        text-align: center;
    }
`

export const DivTypes = styled.div`
    display: flex;
    justify-content: space-around;
`

export const DivPokeDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`