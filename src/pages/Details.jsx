import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { PokemonContext } from '../pokeContext/PokemonContext'
const DetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2600px;
  height: 1400px;
  background-color: pink;
`

const Details = () => {
  const { id } = useParams(); // URL에서 id 가져오기
  const {pokemonData} = useContext(PokemonContext)
  const navigate = useNavigate();

  const selectPokemon = pokemonData.find((pokemon) => pokemon.id === parseInt(id));

  return (
    <DetailsStyled>
      {selectPokemon ? (
        <>
          <img src={selectPokemon.img_url} alt={selectPokemon.korean_name} />
          <p>{selectPokemon.korean_name}</p>
          <p>{selectPokemon.types.join(', ')}</p>
          <p>NO: {selectPokemon.id}</p>
          <p>{selectPokemon.description}</p>
        </>
      ) : (
        <p>포켓몬 데이터를 찾을 수 없습니다.</p>
      )}
      <button onClick={() => navigate("/dex")}>뒤로 가기</button>
    </DetailsStyled>
  )
}

export default Details
