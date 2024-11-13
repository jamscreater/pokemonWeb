import React from 'react'
import { useNavigate } from 'react-router-dom'
import PokemonList from '../components/PokemonList'
import styled from 'styled-components'
 const ButtonStyled = styled.button`
  border: none;
  background-color: salmon;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 `
const Dex = () => {
    const navigate = useNavigate()
  return (
    <div>
        <PokemonList/>
        <ButtonStyled onClick={()=>{
            navigate("/")
        }}>Home으로 이동!!</ButtonStyled>
    </div>
  )
}

export default Dex