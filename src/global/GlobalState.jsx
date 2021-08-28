import React, {useState, useEffect} from 'react'
import { GlobalStateContext } from './GlobalContext'
import { BASE_URL } from '../constants/urls'
import axios from 'axios'

export const GlobalState = (props) => {
    const [pokeNames, setPokeNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    console.log("Pokemons:", pokemons)

    useEffect(()=> {
        getPokeNames()
    }, [])

    useEffect(() => {
        const newList = [];
        pokeNames.forEach((poke) => {
            axios.get(`${BASE_URL}/pokemon/${poke.name}`)
            .then((response) => {
                newList.push(response.data);
                if (newList.length === 151) {
                    const orderedList = newList.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderedList)
                }
            }).catch((error) => {
                console.log(error.message)
            })
        })
    }, [pokeNames])

    const getPokeNames = () => {
        axios.get(`${BASE_URL}/pokemon?limit=151`)
        .then((response) => {
            console.log("GetPokemons: ",response.data.results)
            setPokeNames(response.data.results)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const data = { pokemons, setPokemons, pokedex, setPokedex };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};
