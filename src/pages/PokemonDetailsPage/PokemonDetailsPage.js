import React, {useContext, useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { GlobalStateContext } from '../../global/GlobalContext'
import { goBack, goToPokedexPage} from '../../routes/coordinator'
import { Details, DivContainer, DivTypes, DivPokeDetails } from './styled'


export const PokemonDetailsPage = () => {
    const [selectedPoke, setSelectedPoke] = useState({})
    const {name} = useParams()
    const {pokemons} = useContext(GlobalStateContext)
    const history = useHistory()

    console.log("SelectedPoke:", selectedPoke)

    useEffect(() => {
        const currentPokemon = pokemons.find((poke) => {
            return poke.name === name
        })
        setSelectedPoke(currentPokemon)
    }, [])
    

    return (
        <div>
            <Header title={"Pokémon (Detalhes)"} leftButtonFunction={() => goBack(history)} showRightButton={() => goToPokedexPage(history)}/>
            <DivPokeDetails>
                <div>
                    <h1>{selectedPoke && selectedPoke.name && selectedPoke.name.toUpperCase()}</h1>
                </div>

                <Details>
                    {/* Imagens do pokemon */}
                    {selectedPoke && selectedPoke.sprites &&
                        <DivContainer>
                            <img src={selectedPoke.sprites.front_default} alt="pokemon"/>
                            <img src={selectedPoke.sprites.back_default} alt="pokemon"/>
                        </DivContainer>
                    }
                    {/* Poderes do pokemon */}
                    <DivContainer>
                        <h2>Poderes</h2>
                        {selectedPoke && selectedPoke.stats &&
                            selectedPoke.stats.map((poke) => {
                                return (
                                    <p key={poke.stat.name}>
                                        <strong>{poke.stat.name.toUpperCase()}: </strong> {poke.base_stat}
                                    </p>
                                )
                            })
                        }
                    </DivContainer>
                    {/* Tipos do pokemon */}
                    <DivContainer>
                            <h2>Tipo</h2>
                            <DivTypes>
                                {selectedPoke && selectedPoke.types &&
                                selectedPoke.types.map((poke) => {
                                    return (
                                            <p key={poke.type.name}>
                                                {poke.type.name.toUpperCase()}
                                            </p>
                                    )
                                })}
                            </DivTypes>
                    {/* </div> */}
                    {/* Principais Ataques */}
                    {/* <div> */}
                        <h2>Principais Ataques</h2>
                        {selectedPoke && selectedPoke.moves &&
                            selectedPoke.moves.map((poke, index) => {
                                return (
                                    index < 5 && 
                                    <p key={poke.move.name}>
                                        {poke.move.name.toUpperCase()}
                                    </p>
                                )
                            })
                        }
                    </DivContainer>
                </Details>
            </DivPokeDetails>
        </div>
    )
}