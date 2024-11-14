import React, { useContext} from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import PokemonCard from './PokemonCard'
import { PokemonContext } from '../pokeContext/PokemonContext'
const WrapPokeCardStyled = styled.div`
 box-shadow: 0px 0px 3px 0px gray;
 background-color: pink;
 border-radius: 10px;
 padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const PokemonList = ({removePokemon}) => {
  const {pokemonData} = useContext(PokemonContext)
  const {selectPokemon,setSelectPokemon} = useContext(PokemonContext) // 5

  const addPokeCard = (pokemon) => {
    if (selectPokemon.find((p)=>p.id === pokemon.id)) {
      alert("중복되었으니 다시 추가해주세요!!") 
    }else if(selectPokemon.length<6){
      setSelectPokemon([...selectPokemon, pokemon])
    }else{
      alert("빈 칸이 없습니다!!")
    }
  } // 기능 설명 ...


  return (
    <>
      <Dashboard selectPokemon={selectPokemon} removePokemon={removePokemon} />
      <WrapPokeCardStyled>
        {pokemonData.map((pokemon) => {
          const { img_url, korean_name, id } = pokemon // 부분 설명
          return (
          <PokemonCard addPokeCard={addPokeCard} img_url={img_url} korean_name={korean_name} id={id} pokemon={pokemon}/>
          )
        })}
      </WrapPokeCardStyled>
    </>
  )
}
export default PokemonList