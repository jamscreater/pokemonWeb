import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Dex from '../pages/Dex'
import Details from '../pages/Details'
import Home from '../pages/Home'
import { PokemonContext } from '../pokeContext/PokemonContext'
import { useState } from 'react'
import MOCK_DATA from './Mock_Data'
const Router = () => {
    // 3
    const [selectPokemon, setSelectPokemon] = useState([])
    const [pokemonData] = useState(MOCK_DATA)
    return (
        //2
         <PokemonContext.Provider value={{selectPokemon,setSelectPokemon,pokemonData}}> 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Dex' element={<Dex />} />
                <Route path='/Details/:id' element={<Details />} />
            </Routes>
        </BrowserRouter>
        </PokemonContext.Provider>
    )
}

export default Router