import React, { useContext } from 'react'
import styled from 'styled-components'
import PokemonList from './PokemonList'
import { PokemonContext } from '../pokeContext/PokemonContext'


const DashboardArea = styled.div`
    box-shadow: 0px 0px 3px 0px gray;
    background-color: pink;
    border-radius: 10px;
    margin-bottom: 20px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AddCardBoxStyle = styled.div`
    border: 1px solid purple;
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`
const StyledButton = styled.button`
    margin-bottom: 10px;
`
const Dashboard = () => {
const {selectPokemon,setSelectPokemon} = useContext(PokemonContext)
    const removePokemon = (id) => {
        console.log("removePokemon")
        setSelectPokemon((prev) => prev.filter((pokemon) => pokemon.id !== id))
      } // p 배열이아닐수 있다 



    return (
        <DashboardArea>
            {Array(6)
                .fill()
                .map((_, index) => (
                    <AddCardBoxStyle key={index} className="poketball-box">
                        <img
                            src={index < selectPokemon.length ? selectPokemon[index].img_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png "}
                            alt=""
                        />
                        {index < selectPokemon.length ? <p>{selectPokemon[index].korean_name}</p> : <></>}
                        {index < selectPokemon.length ? <p>NO: {selectPokemon[index].id}</p> : <></>}
                        {index < selectPokemon.length ? <StyledButton onClick={() => removePokemon(selectPokemon[index].id)}>삭제</StyledButton> : <></>}
                    </AddCardBoxStyle>
                ))}
               
        </DashboardArea>
    )
}

export default Dashboard






