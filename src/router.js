import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './shared/header'
import Footer from './shared/footer'
import MainView from './modules/main_page/pages/index'
import DetailViewCharacter from './modules/detail_character/pages/index'
import DetailViewPlanet from './modules/detail_planet/pages/index'
import DetailedStarship from './modules/detail_starship/pages/index'


function Router() {
    return (
        <div className='container'>
            <Header />
            <Switch>

                <Route exact path='/'>
                    <MainView />
                </Route>

                <Route path='/detail_view_character'>
                    <DetailViewCharacter />
                </Route>

                <Route path='/detail_view_planet'>
                    <DetailViewPlanet />
                </Route>

                <Route path='/detail_view_starship'>
                    <DetailedStarship />
                </Route>
                
            </Switch>
            <Footer />
        </div>
    )
}

export default Router