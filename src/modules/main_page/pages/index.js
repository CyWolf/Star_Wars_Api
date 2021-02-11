import React from 'react'

import Characters from '../components/characters'
import Planets from '../components/planets'
import Starships from '../components/starships'

function MainView() {
    
    return (
        <>
        <Characters/>
        <Planets />
        <Starships />
        </>
    )
}

export default MainView