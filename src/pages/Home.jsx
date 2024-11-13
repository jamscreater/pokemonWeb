import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const IncludeStyledWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const LogoStyledHandler = styled.img`
   width: 60%;
`
const ButtonStyle = styled.button`
  border: none;
  background-color: salmon;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  margin-top: 20px;
`
const Home = () => {
    const navigate = useNavigate()
    return (
        <IncludeStyledWrap>
            <LogoStyledHandler src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" alt="" />
            <ButtonStyle onClick={() => {
                navigate("/Dex")
            }}>시작하기!!</ButtonStyle>
        </IncludeStyledWrap>
    )
}

export default Home