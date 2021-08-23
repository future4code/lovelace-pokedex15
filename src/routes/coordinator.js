export const goToHomePage = (history) => {
    history.push("/")
}

export const goToPokedexPage = (history) => {
    history.push("/pokedex")
}

export const goToPokemonDetailsPage = (history) => {
    history.push("/pokemon/details")
}

export const goBack = (history) => {
    history.goBack()
}