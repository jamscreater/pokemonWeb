import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const PokeCardStyled = styled.div`
  box-shadow: 0px 0px 3px 0px gray;
  border-radius: 10px;
  margin: 20px;
  text-align: center;
  width: 180px;
  `
  
const AddPokeButton = styled.button`
  margin-top: 3px;`
const PokemonCard = ({addPokeCard,img_url,korean_name,id,pokemon}) => {
  const navigate = useNavigate()
  return (
    <div> 
          <PokeCardStyled onClick={() => {
              navigate(`/Details/${id}`)
            }}>
              <img src={img_url} alt="" />
              <p>{korean_name}</p>
              <p>NO: {id}</p>
              <AddPokeButton onClick={(e) => {
                e.stopPropagation()
                addPokeCard(pokemon) // e.stopPropagation()-> 현재 이벤트가 캡처링/ 버블링 단계에서 더이생 전파되지 않도록 방지???
                // 전파를 방지해도 이벤트의 기본동작이 실행....(MDN)
              }}>추가</AddPokeButton>
            </PokeCardStyled>
    </div>

  )
}

export default PokemonCard