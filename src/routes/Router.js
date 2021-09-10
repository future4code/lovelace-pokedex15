import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { useHistory } from 'react-router'
import { HomePage } from '../pages/HomePage/HomePage'
import { PokedexPage } from '../pages/PokedexPage/PokedexPage'
import { PokemonDetailsPage } from '../pages/PokemonDetailsPage/PokemonDetailsPage'

export const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route exact path={'/pokedex'} component={PokedexPage}/>
                <Route exact path={"/details/:name"} component={PokemonDetailsPage}/>
                <Route>
                    <p>Página de Erro!</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}